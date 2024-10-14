"use client";

import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoNotificationsOutline, IoPeopleSharp } from "react-icons/io5";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { RiEditBoxLine } from "react-icons/ri";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import MainSection from "@/components/MainSection"; // MainSection for "For You"
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import FollowBar from "@/components/FollowBar";

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

  const SidebarMenuItems = [
    { title: "Home", icon: <BiHomeAlt />, href: "/" },
    { title: "Explore", icon: <BsSearch />, href: "/explore" },
    {
      title: "Notifications",
      icon: <IoNotificationsOutline />,
      href: "/notifications",
    },
    { title: "Messages", icon: <MdOutlineMailOutline />, href: "/messages" },
    { title: "Grok", icon: <RiEditBoxLine />, href: "/grok" },
    { title: "Bookmarks", icon: <PiBookmarkSimpleLight />, href: "/bookmarks" },
    { title: "Communities", icon: <IoPeopleSharp />, href: "/communities" },
    { title: "Profile", icon: <CgProfile />, href: "/profile/123" },
    { title: "More", icon: <CgMoreO />, href: "/more" },
  ];

  return (
    <div className="grid grid-cols-12 h-screen w-auto px-4 md:px-52">
      {/* Sidebar */}
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
            key={"Logout"}
            title={"Logout"}
            icon={<BiHomeAlt />}
            href={"/logout"}
          />
          <SidebarTweetButton />
        </div>
      </div>

      {/* Main content */}
      <div className="col-span-10 md:col-span-7 mx-4 md:mx-10 my-2 border-r-[0.2px] border-l-[0.2px] border-l-slate-700 overflow-y-scroll no-scrollbar border-r-slate-700">
        {/* Tab navigation */}
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

        {/* Render components based on the active tab */}
        {activeTab === "forYou" ? <MainSection /> : <FollowingSection />}
      </div>

      <FollowBar />
    </div>
  );
}
