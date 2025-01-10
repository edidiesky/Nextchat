import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

import { createServer } from "node:http";
const app = express();
const server = createServer(app);
import { errorHandler, NotFound } from "./middleware/error-handler.js";

app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import Auth from "./routes/authRoute.js";
import userAuth from "./routes/userRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import messageRoute from "./routes/messageRoutes.js";
import workspaceRoute from "./routes/workspaceRoutes.js";
import workspaceInviteRoute from "./routes/workspaceInvitationRoutes.js";
import channelRoute from "./routes/channelRoutes.js";
import { initSocket } from "./config/socket.js";
// notificationRoutes

app.use("/api/v1/auth", Auth);
app.use("/api/v1/user", userAuth);
app.use("/api/v1/upload", uploadRoute);
// app.use("/api/v1/conversation", ConversationRoute);
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/workspace", workspaceRoute);
app.use("/api/v1/workspaceinvite", workspaceInviteRoute);
app.use("/api/v1/channel", channelRoute);
// // Middlewares
app.use(NotFound);
app.use(errorHandler);

// function that check sif the userId is included in the OnlineUsers array else it add the user id and scoket Id
initSocket(server);


// addUserId(id, socket?.id)
server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
