import express from 'express';

const router = express.Router();

export const mainRoute = async (req, res) => {
  try{
    res.send("Hello World")
  }catch{
  }
}

export default router;