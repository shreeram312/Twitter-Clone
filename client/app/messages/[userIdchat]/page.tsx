"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useWebSocket } from "@/hooks/useWebSocket";
import { useAppContext } from "@/context";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import { BiHomeAlt } from "react-icons/bi";
import SideBarItem from "@/components/SideBarItem";
import { SidebarMenuItems } from "@/libs/sideitems";
import { FaTwitter } from "react-icons/fa";
import Trending from "@/components/Trending";
import FollowBar from "@/components/FollowBar";

const ActualMessage = () => {
  const router = useRouter();
  const params = useParams();
  const { userData, followStatus, setFollowStatus } = useAppContext();

  const receiverUserId = Array.isArray(params.userIdchat)
    ? params.userIdchat[0]
    : params.userIdchat;

  // Initialize WebSocket hook with the current user's userId
  const { messages, sendMessage } = useWebSocket(userData?.id);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage, receiverUserId); // Send message to specific user
      setNewMessage("");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-auto px-4 md:px-52">
        <div className="col-span-2 py-4  ">
          <div className="hover:bg-gray-800  hover:rounded-full h-fit w-fit p-1 cursor-pointer transition-all">
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
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-800 text-white rounded-lg">
              {msg}
            </div>
          ))}

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

        <FollowBar
          UserData={userData}
          followStatus={followStatus}
          setFollowStatus={setFollowStatus}
        />

        <div className=" flex ">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default ActualMessage;
