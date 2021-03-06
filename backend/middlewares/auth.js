import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretToken = process.env.JWT_TOKEN;

const authenticate = async (req, res) => {
  try{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    let toReturn;
    
    if(token === null) toReturn = {
      "authenticated": false
    };

    jwt.verify(token, secretToken, (err, user) => {
      if(err) toReturn = {
        "authenticated": false
      };

      user.authenticated = true;
      toReturn = user;

    })

    return toReturn;
  }catch{
    return {
      "authenticated": false
    }
  }
}

export const generateAccessToken = (username) => {
  return jwt.sign(username, secretToken, { expiresIn: '10 years' });
}

export default authenticate;