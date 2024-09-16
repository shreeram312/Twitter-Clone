import { FaTwitter } from "react-icons/fa";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { RiEditBoxLine } from "react-icons/ri";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import FeedCard from "@/components/FeedCard/index";
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginClient from "@/components/GoogleLoginClient";

export default function Home() {
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
  }

  const SidebarMenuItems = [
    { title: "Home", icon: <BiHomeAlt /> },
    { title: "Explore", icon: <BsSearch /> },
    { title: "Notifications", icon: <IoNotificationsOutline /> },
    { title: "Messages", icon: <MdOutlineMailOutline /> },
    { title: "Grok", icon: <RiEditBoxLine /> },
    { title: "BookMarks", icon: <PiBookmarkSimpleLight /> },
    { title: "Communities", icon: <IoPeopleSharp /> },
    { title: "Profile", icon: <CgProfile /> },
    { title: "More", icon: <CgMoreO /> },
  ];

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-auto px-4 md:px-52">
        {/* Sidebar */}
        <div className="col-span-2 py-4">
          <div className="hover:bg-gray-800 hover:rounded-full h-fit w-fit p-1 cursor-pointer transition-all">
            <FaTwitter size={40} />
          </div>
          <div className="my-2 ">
            {SidebarMenuItems.map((item) => (
              <div
                key={item.title}
                className="hover:bg-gray-800 w-fit px-1 hover:rounded-full hover:cursor-pointer"
              >
                <li className="flex justify-start items-center gap-4 my-4 py-1">
                  <span className="text-2xl">{item.icon}</span>
                  {/* Hide text on small screens */}
                  <span className="hidden md:block text-xl font-bold">
                    {item.title}
                  </span>
                </li>
              </div>
            ))}
            <button
              style={{ backgroundColor: "rgb(29 155 240)" }}
              className="p-3 -mx-3 rounded-full w-full md:w-48"
            >
              Tweet
            </button>
          </div>
        </div>

        <div className="col-span-10 md:col-span-7 mx-4 md:mx-10 border-r-[0.2px] border-l-[0.2px] border-l-slate-700 overflow-y-scroll no-scrollbar border-r-slate-700">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className="hidden md:block col-span-3 p-5">
          <div className="p-5  bg-slate-700 rounded-lg">
            <h1>New to Twitter...?</h1>
            <GoogleLoginClient />
          </div>
        </div>
      </div>
    </div>
  );
}
