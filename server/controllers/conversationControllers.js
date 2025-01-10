import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
import redisClient from "../utils/redisClient.js";
// @description  Create a Single User's Conversation
// @route  GET /conversation
// @access  Private
const createConversation = asyncHandler(async (req, res) => {
  const { userId, isGroup, users, name, description,img } = req.body;
  // get the token id
  const tokenUserId = req.user?.userId;
  let conversation;
  // create a group conversation
  if (isGroup) {
    if (users?.length < 2) {
      throw new Error("Users in a group should be more than 2");
    }
    const userIds = [tokenUserId, ...users];
    conversation = await prisma.conversations.create({
      data: { isGroup: true, name, description,img, userIds },
    });
    return res.status(200).json({ conversation });
  } else {
    conversation = await prisma.conversations.findFirst({
      where: { isGroup: false, userIds: { hasEvery: [tokenUserId, userId] } },
    });
    if (!conversation) {
      conversation = await prisma.conversations.create({
        data: {
          userIds: [tokenUserId, userId],
        },
      });
    }

    return res.status(200).json({ conversation });
  }
});

// @description  GET A Single User's Conversation
// @route  GET /conversation/:id
// @access  Private
const getSingleUserConversation = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const cachedKey = `user_conversation:${tokenUserId}`;
  const cachedConversation = await redisClient.get(cachedKey);
  if (cachedConversation) {
    res.status(200).json({ conversation: cachedConversation });
  } else {
    const conversation = await prisma.conversations.findUnique({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    // update the read parameter
    await prisma.conversations.update({
      where: {
        id: req.params.id,
      },
      data: {
        seenBy: {
          push: [tokenUserId],
        },
      },
    });
    await redisClient.set(cachedKey, conversation, { EX: 1200 });
    res.status(200).json({ conversation });
  }
});

// @description  GET All User's Conversation
// @route  GET /conversation/
// @access  Private
const getAllUserConversation = asyncHandler(async (req, res) => {
  // get the conversation id from the req params
  const tokenUserId = req.user?.userId;
  const cachedKey = `all_user_conversation:${tokenUserId}`;
  const cachedConversation = await redisClient.get(cachedKey);
  if (cachedConversation) {
    res.status(200).json({ conversation: cachedConversation });
  } else {
    const conversation = await prisma.conversations.findMany({
      where: {
        userIds: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        users: {
          select: {
            name: true,
            id: true,
           img: true,
          },
        },
      },
    });
    // loop to set the receiver in the conversation object
    const formattedConversation = conversation.map((conversation) => {
      if (!conversation.isGroup) {
        const { users: _, ...Otherconversation } = conversation;
        return {
          ...Otherconversation,
          participants: conversation.users,
        };
      }
      // for DM

      const receiver = conversation.users.filter(
        (user) => user?.id !== tokenUserId
      );
      return {
        ...conversation,
        participants: receiver,
      };
    });
    await redisClient.set(cachedKey, formattedConversation, { EX: 1200 });
    res.status(200).json({ conversation: formattedConversation });
  }
});

// @description  Delete a Conversation
// @route  DELETE /conversation/:id
// @access  Private
const DeleteConversation = asyncHandler(async (req, res) => {
  // get the request body
  const tokenUserId = req.user?.userId;
  const conversationId = req.params?.id;
  // Validate the conversation ID
  if (!conversationId) {
    return res.status(400).json({ message: "Conversation ID is required" });
  }
  // check if the conversation exists and the user also exists
  let conversation = await prisma.conversations.findFirst({
    where: { id: conversationId, userIds: { hasSome: [tokenUserId] } },
  });
  if (!conversation) {
    throw new Error("Conversation not found or unauthorized access");
  }
  await prisma.conversations.delete({
    where: { id: conversationId },
  });
  res.status(200).json({ message: "Conversation had been deleted" });
});

export {
  getAllUserConversation,
  createConversation,
  getSingleUserConversation,
  DeleteConversation,
};
