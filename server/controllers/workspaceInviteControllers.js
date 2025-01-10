import asyncHandler from "express-async-handler";
import {
  createWorkSpaceInviteService,
  acceptInviteService,
} from "../services/workspaceinvite.service.js";
import { SUCCESSFULLY_CREATED_STATUS_CODE } from "../constants.js";

// @description  Create Invitation Workspace Handler
// @route  POST /workspaceinvite/:workspaceid
// @access  Private
const createWorkSpaceInviteHandler = asyncHandler(async (req, res) => {
  const tokenUserID = req.user?.userId;
  const workspaceid = req.params?.id;
  // create the user workSpace
  const workSpaceInvite = await createWorkSpaceInviteService(
    tokenUserID,
    workspaceid
  );

  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(workSpaceInvite);
});

// @description  Accept Invitation Workspace Handler
// @route  PUT /workSpaceinvite
// @access  Private
const AcceptWorkSpaceInviteHandler = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { invitationtoken } = req.body;
  const updatedWorkspace = await acceptInviteService(
    invitationtoken,
    tokenUserId
  );
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(updatedWorkspace);
});

export { createWorkSpaceInviteHandler, AcceptWorkSpaceInviteHandler };
