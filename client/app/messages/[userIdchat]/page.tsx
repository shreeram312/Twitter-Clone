"use client";

import FollowBar from "@/components/FollowBar";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import Trending from "@/components/Trending";
import { useAppContext } from "@/context";
import { SidebarMenuItems } from "@/libs/sideitems";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useWebSocket } from "@/hooks/useWebSocket"; // Import the hook

const ActualMessage = () => {
  const router = useRouter();
  const params = useParams();
  const { userData, setUserData, followStatus, setFollowStatus, allUsers } =
    useAppContext();
  const recieveruserId = Array.isArray(params.userIdchat)
    ? params.userIdchat[0]
    : params.userIdchat;

  // WebSocket hook
  const { messages, sendMessage } = useWebSocket();
  const [newMessage, setNewMessage] = useState(""); // State to manage the new message input

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage(""); // Clear the input after sending the message
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-auto px-4 md:px-52">
        <div className="col-span-2 py-4">
          <div className="hover:bg-gray-800 hover:rounded-full h-fit w-fit p-1 cursor-pointer transition-all">
            <FaTwitter size={40} />
          </div>
          <div>
            {SidebarMenuItems.map((item) => (
              <SideBarItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
            <SideBarItem
              title="Logout"
              onClick={() => {
                localStorage.clear();
                router.push("/Intro");
              }}
              icon={<BiHomeAlt />}
            />
            <SidebarTweetButton />
          </div>
        </div>

        <div className="col-span-10 md:col-span-7 mx-4 md:mx-10 border-l-[0.2px] border-r-[0.2px] border-l-slate-700 border-r-slate-700 overflow-y-scroll no-scrollbar">
          <div className="flex flex-col space-y-4">
            {/* Display incoming messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className="p-2 bg-gray-800 text-white rounded-lg"
              >
                {msg}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-800 text-white"
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>

        <FollowBar
          UserData={userData}
          followStatus={followStatus}
          setFollowStatus={setFollowStatus}
        />

        <div className="flex">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default ActualMessage;
