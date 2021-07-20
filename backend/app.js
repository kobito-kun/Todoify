// Library Imports
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Initialization
const app = express();
const port = process.env.PORT || 5000;
dotenv.config()

// Importing Routes
import userRoutes from "./routes/user.js";
import postRoutes from './routes/post.js';
import sectionRoutes from './routes/section.js';

import Section from './models/section.models.js';
import User from './models/user.models.js';
import Post from './models/post.models.js';

// Express Settings
app.use(cors());
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.get("/", (req, res) => {
  Post.find({}, (err, result) => {
    res.json(result);
  })
})
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/section", sectionRoutes);

// Server Connections

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))
app.listen(port, () => console.log(`Server running at port: ${port}`))