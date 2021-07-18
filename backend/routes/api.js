import express from "express";
const router = express.Router();

import { 
  mainRoute
} from "../controllers/api.js";

router.get("/", mainRoute);

export default router;