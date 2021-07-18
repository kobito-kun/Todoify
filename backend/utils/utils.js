import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretToken = process.env.JWT_TOKEN;

export const getUsername = (req, res) => {
  try{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    let toReturn;

    jwt.verify(token, secretToken, (err, user) => {
      if(err) return toReturn = "None";
      toReturn = user.username;
    })

    return toReturn;
  }catch{
    return {
      "authenticated": false
    }
  }
}

export const checkIfAuthenticated = (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];

  let returnThis;

  if(token === null) return returnThis = false;
  

  jwt.verify(token, secretToken, (err, user) => {
    if(err) return returnThis = false;
    return returnThis = true;
  })

  return returnThis;
}
