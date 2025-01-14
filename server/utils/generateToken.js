import jwt from "jsonwebtoken";
export const generateToken = (res, userid) => {
  const token = jwt.sign({ userId: userid }, process.env.JWT_CODE, {
    expiresIn: "12d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    // sameSite: "None",
    secure: process.env.NODE_ENV === "production" || false,
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    path: "/",
  });

  // console.log("Token generated and cookie set:", token);
};