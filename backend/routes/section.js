import express from "express";
const router = express.Router();

import { 
  getSectionsRoute,
  getSectionRoute,
  createSectionRoute,
  updateSectionRoute,
} from "../controllers/section.js";

router.get("/", getSectionsRoute);
router.get("/:id", getSectionRoute);
router.post("/", createSectionRoute);
router.put("/", updateSectionRoute);

export default router;