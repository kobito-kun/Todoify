import express from 'express';

import { getUsername } from '../utils/utils.js';
import Section from '../models/section.models.js';

const router = express.Router();

export const getSectionsRoute = async (req, res) => {
  try{
    Section.find({user: getUsername(req, res)}, (err, result) => {
      return res.status(200).json(result);
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const getSectionRoute = async (req, res) => {
  try{
    const {sectionID} = req.params;
    Section.findOne({_id: sectionID}, (err, result) => {
      return res.status(200).json(result)
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const createSectionRoute = async (req, res) => {
  try{
    const {title, description} = req.body;
    const newSection = new Section({
      title: title,
      description: description,
      user: getUsername(req, res)
    })
    newSection.save();
    return res.status(200).json({"message": "User Saved."})
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export const updateSectionRoute = async (req, res) => {
  try{
    const {_id, title, description} = req.body;
    Section.findOne({_id: _id}, (err, result) => {
      result.title = title || result.title;
      result.description = description || result.description;
      result.save()
      return res.status(200).json({"message": "success"});
    })
  }catch{
    return res.status(500).json({"message": "Error"})
  }
}

export default router;