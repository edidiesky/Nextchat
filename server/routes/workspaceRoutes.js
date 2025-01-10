import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createWorkSpace,
  DeleteWorkSpace,
  getAllUserWorkSpace,
  UpdateWorkSpace,
  getASingleUserWorkSpace,
} from "../controllers/workspaceControllers.js";
import checkRole from "../middleware/checkRole.js";
import { validate } from "../middleware/validation.js";
import {
  createWorkSpaceSchema,
  updateWorkSpaceSchema,
} from "../validations/workspace.validation.js";

router
  .route("/")
  .post(authMiddleware, validate(createWorkSpaceSchema), createWorkSpace)
  .get(authMiddleware, getAllUserWorkSpace);
router
  .route("/:id/:workspaceuserid")
  .get(authMiddleware, getASingleUserWorkSpace)
  .delete(authMiddleware, checkRole("admin"), DeleteWorkSpace)
  .put(
    authMiddleware,
    checkRole("admin"),
    validate(updateWorkSpaceSchema),
    UpdateWorkSpace
  );

export default router;
