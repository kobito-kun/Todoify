import express from 'express';

import { getUsername, checkIfAuthenticated } from '../utils/utils.js';
import Post from '../models/post.models.js';
const router = express.Router();

export const getPostsRoute = async (req, res) => {
  try{
    const { sectionID } = req.params;
    Post.find({section: sectionID}, (err, result) => {
      return res.status(200).json(result);
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const getPostRoute = async (req, res) => {
  try{
    const {id} = req.params;
    Post.findOne({_id: id}, (err, result) => {
      return res.status(200).json(result);
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const createPostRoute = async (req, res) => {
  try{
    if(checkIfAuthenticated(req, res)){
      const {title, description, section} = req.body;
      const newPost = new Post({
        title: title,
        description: description,
        section: section,
        user: getUsername(req, res)
      });
      newPost.save();
      return res.status(200).json({"message": "success"});
    }else{
      res.status(202).json({"message": "Not authenticated"})
    }
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const deletePostRoute = async (req, res) => {
  try{
    if(checkIfAuthenticated(req, res)){
      const {_id} = req.params;
      Post.deleteOne({_id: _id}, (err) => {
        if(err) return res.status(202).json({"message": "failed"});
        return res.status(200).json({"message": "success"});
      })
    }else{
      return res.status(202).json({"message": "Not authenticated"});
    }
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const updatePostRoute = async (req, res) => {
  try{
    if(checkIfAuthenticated(req, res)){
      const {_id, title, description, section} = req.body;
      Post.findOne({_id: _id}, (err, result) => {
        result.title = title || result.title;
        result.description = description || result.description;
        result.section = section || result.section;
        result.save();
        return res.status(200).json({"message": "success"});
      })
    }else{
      res.status(202).json({"message": "Not authenticated"})
    }
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export default router;