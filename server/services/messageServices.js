import { publisher } from "../config/redis.js";
import {
  CONNECTION_COUNT_UPDATED_CHANNEL,
  GROUP_COUNT_CHANNEL,
  DIRECT_MESSAGE_UPDATED_CHANNEL,
} from "../constants.js";

export const publishMessage = async (message) => {
  try {
    // console.log(message);
    await publisher.publish(
      DIRECT_MESSAGE_UPDATED_CHANNEL,
      JSON.stringify(message)
    );
    // console.log(`Message published to ${DIRECT_MESSAGE_UPDATED_CHANNEL}`);
  } catch (error) {
    console.log(error);
  }
};

export const publishConnectedUsers = async (message) => {
  try {
    await publisher.publish(CONNECTION_COUNT_UPDATED_CHANNEL, message);
  } catch (error) {
    console.log(error);
  }
};

export const publishGroupConnections = async (message) => {
  try {
    await publisher.publish(GROUP_COUNT_CHANNEL, JSON.stringify(message));
  } catch (error) {
    console.log(error);
  }
};
