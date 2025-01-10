import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createMessageHandler,
  updateMessageHandler,
  getChannelMessageHandler,
  deleteMessageHandler,
  getASingleMessageThreadHandler,
  ReplyToMessageHandler,
} from "../controllers/messageControllers.js";
import { validate } from "../middleware/validation.js";
import {
  createMessageSchema,
  updateMessageSchema,
} from "../validations/message.validation.js";

router
  .route("/:id")
  .post(authMiddleware, validate(createMessageSchema), createMessageHandler)
  .get(authMiddleware, getChannelMessageHandler);
router
  .route("/:id/:channelid")
  .delete(authMiddleware, deleteMessageHandler)
  .post(authMiddleware, validate(createMessageSchema), ReplyToMessageHandler)
  .get(authMiddleware, getASingleMessageThreadHandler)
  .put(authMiddleware, validate(updateMessageSchema), updateMessageHandler);

export default router;
