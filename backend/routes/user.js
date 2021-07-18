import express from "express";
const router = express.Router();

import { 
  deleteProfileRoute,
  loginRoute,
  profileRoute,
  registerRoute,
  updateProfileRoute,
} from "../controllers/user.js";

router.get("/", profileRoute);
router.post("/", updateProfileRoute);
router.delete("/", deleteProfileRoute);
router.post("/login", loginRoute);
router.post("/register", registerRoute);

export default router;