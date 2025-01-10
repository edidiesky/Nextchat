import express from "express";
const router = express.Router();

import {
  registerUser,
  LoginUser,
  LogoutUser,
} from "../controllers/authController.js";

router.post("/register", registerUser);
router.post("/login", LoginUser);
router.post("/logout", LogoutUser);

export default router;
