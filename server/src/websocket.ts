import express from "express";
import http from "http";
import { Server as socketIo } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId);
    console.log(`User with ID ${userId} joined room ${userId}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("chatMessage", ({ message, receiverUserId }) => {
    io.to(receiverUserId).emit("chatMessage", message);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
