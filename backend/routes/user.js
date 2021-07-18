import express from "express";
const router = express.Router();

import { 
  mainRoute
} from "../controllers/user.js";

router.get("/", mainRoute);

export default router;