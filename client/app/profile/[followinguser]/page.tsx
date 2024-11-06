"use client";
import { FetchParticularUser } from "@/actions/action";
import FollowBar from "@/components/FollowBar";
import ProfileSection from "@/components/ProfileSection";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import Trending from "@/components/Trending";
import { useAppContext } from "@/context";
import { SidebarMenuItems } from "@/libs/sideitems";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const page = () => {
  const { userData, allUsers } = useAppContext();
  const params = useParams();
  const userId = Array.isArray(params.followinguser)
    ? params.followinguser[0]
    : params.followinguser;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await FetchParticularUser(userId);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
  }, []);

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
              key={"Logout"}
              title={"Logout"}
              icon={<BiHomeAlt />}
              href={"/logout"}
            />
            <SidebarTweetButton />
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-10 md:col-span-7 mx-4 md:mx-10 border-l-[0.2px] border-r-[0.2px] border-l-slate-700 border-r-slate-700 overflow-y-scroll no-scrollbar">
          {/* <ProfileSection /> */}
        </div>

        {/* {loading ? (
        <div className="h-56 p-2 my-4 rounded-md w-80 bg-gray-800">
          <div className="h-6 w-28 p-2 bg-gray-700 rounded"></div>
          <SkeletonFollowBar />
          <SkeletonFollowBar />
          <SkeletonFollowBar />
        </div>
      ) : ( */}
        {/* <FollowBar
        UserData={userData}
        followStatus={followStatus}
        setFollowStatus={setFollowStatus}
        setUserData={setUserData} // Pass setUserData
      /> */}
        {/* )} */}

        <div className=" flex mx-24 ">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default page;
