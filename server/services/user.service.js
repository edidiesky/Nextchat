import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
// @description  Create a user's user Service
const createUserService = async (image, description, userid) => {
  // create the user user
  const user = await prisma.user.create({
    data: { userid,img, description },
  });

  // creating the UserUser
  await prisma.user.create({
    data: { userid, role: "admin", userid: user.id },
  });
  return user;
};

// @description  Get all user's user Service
const getAllUserUserService = async (filterData) => {
  return await prisma.user.findMany({
    where: filterData,
    include: {
      user: {
        select: { name: true, id: true,img: true },
      },
    },
  });
};

// @description  DELETE a user's user Service
const deleteUserService = async (userid) => {
  return await prisma.user.delete({
    where: { id: userid },
  });
};

// @description  Get a single user Service
const getASingleUserService = async (userid) => {
  return await prisma.user.findUnique({
    where: { id: userid },
  });
};
// @description  Update a Single user's user Service
const updateUserService = asyncHandler(async (req, res) => {});

export {
  createUserService,
  updateUserService,
  getAllUserUserService,
  deleteUserService,
  getASingleUserService,
};
