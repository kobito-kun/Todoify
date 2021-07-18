import express from "express";
const router = express.Router();

import { 
  getPostsRoute,
  getPostRoute,
  createPostRoute,
  updatePostRoute
} from "../controllers/post.js";

router.get("/many/:sectionID", getPostsRoute);
router.get("/one/:id", getPostRoute);
router.post("/", createPostRoute);
router.put("/", updatePostRoute);

export default router;