import express from 'express';

import { getUsername } from '../utils/utils.js';
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
    const {title, description, section} = req.body;
    const newPost = new Post({
      title: title,
      description: description,
      section: section,
      user: getUsername(req, res)
    });
    newPost.save();
    return res.status(200).json({"message": "success"});
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const updatePostRoute = async (req, res) => {
  try{
    const {_id, title, description, section} = req.body;
    Post.findOne({_id: _id}, (err, result) => {
      result.title = title || result.title;
      result.description = description || result.description;
      result.section = section || result.section;
      result.save();
      return res.status(200).json({"message": "success"});
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export default router;