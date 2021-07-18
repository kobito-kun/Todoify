import express from 'express';

import User from "../models/user.models.js";
import Post from '../models/post.models.js';
import Section from '../models/section.models.js';
import { getUsername, checkIfAuthenticated } from '../utils/utils.js';
import { generateAccessToken } from '../middlewares/auth.js';

const router = express.Router();

export const profileRoute = async (req, res) => {
  try{
    if(checkIfAuthenticated === true){
      User.findOne({username: getUsername(req, res)}, (err, user) => {
        res.status(200).json(user);
      })
    }else{
      res.status(202).json({"message": "Not authenticated"});
    }
  }catch{
    res.status(500).json({"message": "Error"});
  }
}

export const updateProfileRoute = async (req, res) => {
  try{
    if(checkIfAuthenticated === true){
      const {email, password} = req.body;
      User.findOne({username: getUsername(req, res)}, (err, user) => {
        user.email = email || user.email;
        user.password = password || user.email;
        user.save();
        res.status(200).json({"message": "success"})
      })
    }else{
      res.status(202).json({"message": "Not authenticated"});
    }
  }catch{
    res.status(500).json({"message": "Error"})
  }
}

export const deleteProfileRoute = async (req, res) => {
  try{
    if(checkIfAuthenticated === true){
      const username = getUsername(req, res);
      await User.deleteOne({username: username});
      await Post.deleteMany({user: username});
      await Section.deleteMany({user: username});
      
      res.status(200).json({"message": "success"});
    }else{
      res.status(202).json({"message": "Not authenticated"})
    }
  }catch{
    res.status(500).json({"message": "Error"});
  }
}

export const loginRoute = async (req, res) => {
  try{
    const { username, password } = req.body;
    User.findOne({username: username}, (err, result) => {
      if(password === result.password){
        const token = generateAccessToken({username: username});
        return res.status(200).json({
          "message": "Authenticated",
          "token": token,
          "username": username,
        })
      }else{
        return res.status(200).json({"message": "Incorrect Credentials."})
      }
    });
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const registerRoute = async (req, res) => {
  try{
    const {username, email, password} = req.body;
    User.findOne({username: username}, (err, result) => {
      if(result){
        return res.status(200).json({
          "message": "Username already existing."
        })
      }else{
        const newUser = new User({
          username: username,
          email: email,
          password: password
        })
        newUser.save();
        return res.status(200).json({
          "message": "User Created",
          "username": username,
          "token": generateAccessToken({username: username})
        })
      }
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export default router;