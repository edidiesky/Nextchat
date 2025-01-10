import { subscriber } from "../config/redis.js";
import { DIRECT_MESSAGE_UPDATED_CHANNEL } from "../constants.js";
import { getASpecificUser } from "./helpers.js";

const setupRedisSubscriber = async (io, OnlineUsers) => {
  try {
    subscriber.subscribe(DIRECT_MESSAGE_UPDATED_CHANNEL, (err, count) => {
      if (err) {
        console.log(
          `Error subscribing to ${DIRECT_MESSAGE_UPDATED_CHANNEL}`,
          err
        );
      }
      console.log(`Subscribed to ${DIRECT_MESSAGE_UPDATED_CHANNEL}`, count);
    });
    subscriber.on("message", (channel, message) => {
      if (channel === DIRECT_MESSAGE_UPDATED_CHANNEL) {
        const parsedMessage = JSON.parse(message);
        const user = getASpecificUser(parsedMessage.receiverId, OnlineUsers);
        // console.log(user);
        io.to(user?.socketId).emit(DIRECT_MESSAGE_UPDATED_CHANNEL, {
          parsedMessage,
        });
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default setupRedisSubscriber;
