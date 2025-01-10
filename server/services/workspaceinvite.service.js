import prisma from "../prisma/index.js";
// @description  Create a workSpaceUserInvite Service
const createWorkSpaceInviteService = async (userid, workspaceid) => {
  // Creating the token and its expiration
  const invitationtoken = Math.floor(9000 * Math.random() + 1000).toString(); // token
  const invitationtokenexpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hrs
  // create the user workSpaceUserInvite
  const workSpaceUserInvite = await prisma.workSpaceUserInvite.create({
    data: {
      userid,
      workspaceid,
      invitationtoken,
      invitationtokenexpiresAt,
    },
  });
  // send mail later on using upstash/redis
  return workSpaceUserInvite;
};

// @description  acceptInvitation Service
const acceptInviteService = async (invitationtoken, userid) => {
  // find the invite
  const invite = await prisma.workSpaceUserInvite.findFirst({
    where: {
      invitationtoken,
    },
  });
  // check for invite existence
  if (
    !invite &&
    invite.status !== "pending" &&
    new Date.now() === invite.invitationtokenexpiresAt
  ) {
    throw new Error("Invite expired");
  }

  // create a new workspace
  await prisma.workSpaceUser.create({
    data: {
      userid,
      workspaceid: invite.workspaceid,
    },
  });
  // update the invite
  await prisma.workSpaceUserInvite.update({
    where: {
      invitationtoken,
    },
    data: {
      status: "accepted",
    },
  });

  return { message: "User has been added to workspace successfully!!" };
};

export { createWorkSpaceInviteService, acceptInviteService };
