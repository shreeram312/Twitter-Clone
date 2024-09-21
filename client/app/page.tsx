import { FaTwitter } from "react-icons/fa";
import React from "react";
import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { RiEditBoxLine } from "react-icons/ri";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import MainSection from "@/components/MainSection";
import SideBarItem from "@/components/SideBarItem";
import { GrLogout } from "react-icons/gr";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import FollowBar from "@/components/FollowBar";
import Button from "@/components/Button";
export default function Home() {
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
  }

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
    { title: "BookMarks", icon: <PiBookmarkSimpleLight />, href: "/bookmarks" },
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
            icon={<GrLogout />}
            href={"/logout"}
          />

          <SidebarTweetButton />
        </div>
      </div>

      <div className="col-span-10 md:col-span-7 mx-4 md:mx-10 border-r-[0.2px] border-l-[0.2px] border-l-slate-700 overflow-y-scroll no-scrollbar border-r-slate-700">
        <MainSection label={"Home"} showBackArrow />
      </div>
      <FollowBar />
    </div>
  );
}
