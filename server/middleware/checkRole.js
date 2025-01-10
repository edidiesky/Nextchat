import prisma from "../prisma/index.js";

function checkRole(specifiedRole) {
  return async (req, res, next) => {
    const tokenUserID = req.user.id;
    userRole = await prisma.workSpaceUser.findUnique({
      where: { userid: tokenUserID },
      select: {
        role: true,
      },
    });
    if (!userRole && userRole === specifiedRole) {
      res.status(403);
      throw new Error(`Forbidden: You are dont have ${specifiedRole} role`);
    }
    next();
  };
}

export default checkRole;
