import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_API;

let socket: Socket;

export const useWebSocket = (userId: string) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket = io(SOCKET_SERVER_URL);

    // Join the user-specific room
    socket.emit("join", userId);

    socket.on("chatMessage", (message: string) => {
      // Ensure only the message string is stored
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("chatMessage");
      socket.disconnect();
    };
  }, [userId]);

  // Send a message to a specific user by providing receiverUserId
  const sendMessage = (message: string, receiverUserId: string) => {
    if (socket) {
      socket.emit("chatMessage", { message, receiverUserId });
    }
  };

  return { messages, sendMessage };
};
