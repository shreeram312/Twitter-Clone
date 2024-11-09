"use client";
import FollowBar from "@/components/FollowBar";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import Trending from "@/components/Trending";
import { useAppContext } from "@/context";
import { SidebarMenuItems } from "@/libs/sideitems";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Messages = () => {
  const router = useRouter();

  const { userData, setUserData, followStatus, setFollowStatus, allUsers } =
    useAppContext();

  const handleNavigate = useCallback((id) => {
    router.push(`/messages/${id}`);
  }, []);
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
          {allUsers.map((user) => (
            <div
              onClick={() => handleNavigate(user.id)}
              key={user.id}
              className="cursor-pointer rounded-md p-4 shadow-md hover "
            >
              <div>{user.userName}</div>
              <div></div>
            </div>
          ))}
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

export default Messages;
