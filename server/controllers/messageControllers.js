import asyncHandler from "express-async-handler";
import {
  createMessageService,
  deleteMessageService,
  getASingleMessageThreadService,
  getChannelMessageService,
  ReplyToMessageService,
  updateMessageService,
} from "../services/message.service.js";
import {
  SUCCESSFULLY_CREATED_STATUS_CODE,
  SUCCESSFULLY_FETCHED_STATUS_CODE,
} from "../constants.js";

// @description  Create a User's message
// @route  POST /message/:channelid
// @access  Private
const createMessageHandler = asyncHandler(async (req, res) => {
  // get the body message
  const { body,img } = req.body;
  const tokenUserID = req.user?.userId;
  const channelID = req.params?.id;
  const message = await createMessageService(
    body,
   img,
    tokenUserID,
    channelID
  );
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(message);
});
// ReplyToMessageService
// @description  Create a User's message
// @route  POST /message/:messageid/:channelid
// @access  Private
const ReplyToMessageHandler = asyncHandler(async (req, res) => {
  // get the body message
  const { body,img } = req.body;
  const tokenUserID = req.user?.userId;
  const { channelid: channelid, id: messageid } = req.params;

  const message = await ReplyToMessageService(
    body,
   img,
    tokenUserID,
    channelid,
    messageid
  );
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(message);
});
// @description  GET All channel's message
// @route  GET /message/:channelID
// @access  Private
const getChannelMessageHandler = asyncHandler(async (req, res) => {
  const channelID = req.params.id;
  const message = await getChannelMessageService(channelID);
  res.status(SUCCESSFULLY_FETCHED_STATUS_CODE).json(message);
});

// @description  GET All channel's message
// @route  GET /message/:messageid/:channelid
// @access  Private
const getASingleMessageThreadHandler = asyncHandler(async (req, res) => {
  const { channelid: channelid, id: messageid } = req.params;

  const message = await getASingleMessageThreadService(channelid, messageid);
  res.status(SUCCESSFULLY_FETCHED_STATUS_CODE).json(message);
});

// @description  DELETE a Single User's message
// @route  DELETE /message/:messageid/:channelid
// @access  Private
const deleteMessageHandler = asyncHandler(async (req, res) => {
  const { channelid: channelid, id: messageid } = req.params;
  const tokenUserID = req.user?.userId;
  const deletedMessage = await deleteMessageService(
    channelid,
    messageid,
    tokenUserID
  );
  if (!deletedMessage) {
    res.status(UNAUTHORIZED_STATUS_CODE);
    throw new Error("message was not found, unauthorized action");
  }
  res
    .status(SUCCESSFULLY_FETCHED_STATUS_CODE)
    .json({ message: "Message has being succesfully deleted" });
});

// @description  Update a Single User's message
// @route  PUT /message/:messageid/:channelid
// @access  Private
const updateMessageHandler = asyncHandler(async (req, res) => {
  const { channelid: channelid, id: messageid } = req.params;
  const tokenUserID = req.user?.userId;
  const message = await updateMessageService(
    tokenUserID,
    channelid,
    messageid,
    ...req.body
  );
  res.status(SUCCESSFULLY_FETCHED_STATUS_CODE).json(message);
});

export {
  createMessageHandler,
  updateMessageHandler,
  getChannelMessageHandler,
  deleteMessageHandler,
  getASingleMessageThreadHandler,
  ReplyToMessageHandler,
};
