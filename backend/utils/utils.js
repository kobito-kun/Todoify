import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretToken = process.env.JWT_TOKEN;

export const getUsername = async (req, res) => {
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
      toReturn = user.username;
    })

    return toReturn;
  }catch{
    return {
      "authenticated": false
    }
  }
}
