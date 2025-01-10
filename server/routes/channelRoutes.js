import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createChannelHandler,
  DeleteChannelHandler,
  getAllUserChannelHandler,
  UpdateChannelHandler,
  getSingleChannelHandler,
} from "../controllers/channelControllers.js";
import checkRole from "../middleware/checkRole.js";
import {
  createChannelSchema,
  updateChannelSchema,
} from "../validations/channel.validation.js";
import { validate } from "../middleware/validation.js";

router
  .route("/:workspaceid")
  .post(authMiddleware, validate(createChannelSchema), createChannelHandler)
  .get(authMiddleware, getAllUserChannelHandler);
router
  .route("/:id/:workspaceid")
  .get(authMiddleware, getSingleChannelHandler)
  .delete(authMiddleware, checkRole("admin"), DeleteChannelHandler)
  .put(
    authMiddleware,
    checkRole("admin"),
    validate(updateChannelSchema),
    UpdateChannelHandler
  );

export default router;
