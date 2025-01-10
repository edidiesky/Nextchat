import { DIRECT_MESSAGE_UPDATED_CHANNEL } from "../constants.js";
import { publishConnectedUsers, publishMessage } from "./messageServices.js";
import { addUserId } from "./helpers.js";

export const setUpSocketHandlers = (io, OnlineUsers) => {

  // io.emit('message','Connected form the backend and testing sending of the data form the socket server')
  io.on("connection", (socket) => {
    console.log("a user connected");

    // io.emit('message','Connected form the backend and testing sending of the data form the socket server')
    socket.on("addUserId", (id) => {
      addUserId(id, socket?.id, OnlineUsers);
      publishConnectedUsers(OnlineUsers?.length);
      io.emit("getAllConnectedUser", OnlineUsers);
    });

    socket.on(DIRECT_MESSAGE_UPDATED_CHANNEL, ({ receiverid, ...data }) => {
      publishMessage({
        receiverid,
        ...data,
      })
    });

    socket.on("disconnect", () => {
      console.log("🔥: A user disconnected");
      RemoveUser(socket?.id, OnlineUsers);
      io.emit("getAllConnectedUser", OnlineUsers);
    });
  });
};
