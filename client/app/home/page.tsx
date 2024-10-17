"use client";
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import MainSection from "@/components/MainSection";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import FollowBar from "@/components/FollowBar";
import { useRouter } from "next/navigation";
import { SidebarMenuItems } from "@/libs/sideitems";

const FollowingSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white">Following</h2>
      <p className="mt-2 text-gray-400">Posts from people you follow.</p>
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("forYou");
  const router = useRouter();

  return (
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

      <div className="col-span-10 md:col-span-7 mx-4 md:mx-10 my-2 border-r-[0.2px] border-l-[0.2px] border-l-slate-700 overflow-y-scroll no-scrollbar border-r-slate-700">
        <div className="flex items-center justify-between my-2 bg-black font-bold text-white">
          <div
            className={`flex-1 text-center cursor-pointer ${
              activeTab === "forYou" ? "text-blue-400" : ""
            }`}
            onClick={() => setActiveTab("forYou")}
          >
            For you
          </div>

          <div className="w-[1px] h-8 bg-white"></div>

          <div
            className={`flex-1 text-center cursor-pointer ${
              activeTab === "following" ? "text-blue-400" : ""
            }`}
            onClick={() => setActiveTab("following")}
          >
            Following
          </div>
        </div>

        {activeTab === "forYou" ? <MainSection /> : <FollowingSection />}
      </div>

      <FollowBar />
    </div>
  );
}
