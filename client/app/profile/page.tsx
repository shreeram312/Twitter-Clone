import FollowBar from "@/components/FollowBar";
import ProfileSection from "@/components/ProfileSection";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { IoNotificationsOutline, IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { RiEditBoxLine } from "react-icons/ri";

interface DataProps {
  id: string;
  bio: string;
  name: string;
  userName: string;
  profilePicture: string;
  post: [];
}
const Profile = () => {
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
        <ProfileSection />
      </div>

      <FollowBar />
    </div>
  );
};

export default Profile;
