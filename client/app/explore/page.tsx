"use client";
import FollowBar from "@/components/FollowBar";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import Trending from "@/components/Trending";
import { useAppContext } from "@/context";
import { SidebarMenuItems } from "@/libs/sideitems";
import { useRouter } from "next/navigation";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const Explore = () => {
  const router = useRouter();
  const { userData, setUserData, followStatus, setFollowStatus } =
    useAppContext();
  return (
    <div>
      <div>
        {" "}
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
                key={"Logout"}
                title={"Logout"}
                icon={<BiHomeAlt />}
                href={"/logout"}
              />
              <SidebarTweetButton />
            </div>
          </div>

          <div className="col-span-10 md:col-span-7  md:mx-10 border-r-[0.2px] border-l-[0.2px] border-l-slate-700 overflow-y-scroll no-scrollbar border-r-slate-700">
            <div className="flex ">
              <button
                onClick={() => {
                  router.back();
                }}
                className="text-3xl mx-2 my-2 hover:rounded-full p-2  hover:bg-gray-900  "
              >
                <IoMdArrowRoundBack />
              </button>

              <p className="my-4 mx-2 text-2xl ">Post</p>
            </div>
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
    </div>
  );
};

export default Explore;
