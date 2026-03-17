import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);

export default router;
