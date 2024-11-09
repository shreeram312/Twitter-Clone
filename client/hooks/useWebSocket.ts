// hooks/useWebSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

// Replace this with your actual WebSocket server URL
const SOCKET_SERVER_URL = "http://localhost:3001";

let socket: Socket;

export const useWebSocket = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket = io(SOCKET_SERVER_URL);

    socket.on("chatMessage", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up WebSocket connection when the component unmounts
    return () => {
      socket.off("chatMessage");
      socket.disconnect();
    };
  }, []);

  // Function to send messages to the WebSocket server
  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit("chatMessage", message);
    }
  };

  return { messages, sendMessage };
};
