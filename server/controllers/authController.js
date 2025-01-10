import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
import { generateToken } from "../utils/generateToken.js";
import { BAD_REQUEST_STATUS_CODE } from "../constants.js";

// @description  Register a new User
// @route  POST /auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;
  //
  if (!email || !password || !name) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    password: hashedpassword,
    name,
    username,
  };
  const verificationToken = Math.floor(9000 * Math.random() + 1000).toString();
  const verifiedTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const user = await prisma.user.create({
    data: Tempuser,
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const { hashedPassword: _, ...userInfo } = user;
  res.status(200).json({ user: userInfo });
});

// @description  Login a new User
// @route  POST /auth/login
// @access  Public
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("Please fill in the valid credentails");
  }
  // Find the user in the database

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!userExist) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("You do not have any record with us!!!");
  }
  const verifyPassword = await bcrypt.compare(password, userExist.password);
  if (!verifyPassword) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("Please provide a valid Password!!");
  }

  generateToken(res, userExist.id);

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const { hashedPassword: _, ...userInfo } = userExist;
  res.status(200).json({ user: userInfo });
});

const LogoutUser = asyncHandler(async (req, res) => {
  // console.log(token);
  res.cookie("jwt", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
  });
});

export { registerUser, LoginUser, LogoutUser };
