import asyncHandler from "express-async-handler";
import {
  createWorkSpaceService,
  getASingleWorkSpaceService,
  getAllUserWorkSpaceService,
  deleteWorkSpaceService,
  getWorkSpaceUserService,
  updateWorkSpaceService,
  getASingleUserWorkSpaceService,
} from "../services/workspace.service.js";
import {
  BAD_REQUEST_STATUS_CODE,
  SUCCESSFULLY_CREATED_STATUS_CODE,
  UNAUTHORIZED_STATUS_CODE,
} from "../constants.js";

// @description  Create a User's workSpace Contr
// @route  POST /workspace
// @access  Private
const createWorkSpace = asyncHandler(async (req, res) => {
  // get the body data
  const { name, slug,img, description } = req.body;
  const tokenUserID = req.user?.userId;
  // finding existing workspace
  const exisitingworkSpace = await getASingleWorkSpaceService(name, slug);
  if (exisitingworkSpace) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("A workspace with this slug already exists");
  }
  // create the user workSpace
  const workSpace = await createWorkSpaceService(
    name,
    slug,
   img,
    description,
    tokenUserID
  );

  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(workSpace);
});

// @description  GET All User's workSpace
// @route  GET /workspace
// @access  Private
const getAllUserWorkSpace = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const workspaceID = req.params?.id;

  let workSpaces = await getAllUserWorkSpaceService(tokenUserId, workspaceID);
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(workSpaces);
});

// @description  GET A Single User's workSpace
// @route  GET /workSpace/:id/:workspaceuserid
// @access  Private
const getASingleUserWorkSpace = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { workspaceuserid: workspaceuserid, id: workspaceid } = req.params;

  if (!workspaceuserid || !workspaceid) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("Workspace ID and WorkspaceUser ID are needed");
  }
  let workSpace = await getASingleUserWorkSpaceService(
    tokenUserId,
    workspaceid,
    workspaceuserid
  );
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(workSpace);
});

// @description  DELETE a User's workSpace
// @route  DELETE /workSpace/:workspaceid
// @access  Private
const DeleteWorkSpace = asyncHandler(async (req, res) => {
  const userid = req.user?.userId;
  const { workspaceuserid: workspaceuserid, id: workspaceid } = req.params;
  if (!workspaceuserid || !workspaceid) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("Workspace ID and WorkspaceUser ID are needed");
  }
  // checking if the user has a role of admin in the workspace
  let deletedWorkSpace = await deleteWorkSpaceService(
    workspaceuserid,
    workspaceid,
    userid
  );
  if (!deletedWorkSpace) {
    res.status(UNAUTHORIZED_STATUS_CODE);
    throw new Error("workSpace was not found, unauthorized action");
  }
  res
    .status(SUCCESSFULLY_CREATED_STATUS_CODE)
    .json({ workSpace: "workSpace has been deleted succesfully" });
});

// @description  Update a Single User's workSpace
// @route  PUT /workSpace/:id
// @access  Private
const UpdateWorkSpace = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const workspaceid = req.params?.id;
  const { role } = req.body;
  const isAdmin = await getWorkSpaceUserService(tokenUserId);
  if (!isAdmin) {
    res.status(UNAUTHORIZED_STATUS_CODE);
    throw new Error("Forbidden: Role is only for Admins");
  }
  const updatedWorkspace = await updateWorkSpaceService(
    tokenUserId,
    workspaceid,
    role
  );
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(updatedWorkspace);
});

export {
  createWorkSpace,
  DeleteWorkSpace,
  getAllUserWorkSpace,
  UpdateWorkSpace,
  getASingleUserWorkSpace,
};
