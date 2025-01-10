import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createWorkSpaceInviteHandler,
  AcceptWorkSpaceInviteHandler,
} from "../controllers/workspaceInviteControllers.js";

router
  .route("/:id")
  .post(authMiddleware, createWorkSpaceInviteHandler)
  .put(authMiddleware, AcceptWorkSpaceInviteHandler);

export default router;
