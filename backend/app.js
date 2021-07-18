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
import apiRoutes from "./routes/api.js";
import userRoutes from "./routes/user.js";

// Express Settings
app.use(cors());
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api", apiRoutes);
app.use("/user", userRoutes);

// Server Connections

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))
app.listen(port, () => console.log(`Server running at port: ${port}`))