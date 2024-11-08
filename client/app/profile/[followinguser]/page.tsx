"use client";
import { FetchParticularUser } from "@/actions/action";
import BottomProfile from "@/components/BottomProfile";
import FollowBar from "@/components/FollowBar";
import ProfileSection from "@/components/ProfileSection";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import Trending from "@/components/Trending";
import { useAppContext } from "@/context";
import { SidebarMenuItems } from "@/libs/sideitems";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const FollowingUserProfile = () => {
  const { userData, followStatus, setFollowStatus } = useAppContext();
  const params = useParams();
  const userId = Array.isArray(params.followinguser)
    ? params.followinguser[0]
    : params.followinguser;

  const router = useRouter();
  const [currentuser, setcurrentuser] = useState<any>({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await FetchParticularUser(userId);
        setcurrentuser(res);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
  }, []);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

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
          <div className="bg-black text-white min-h-screen p-2">
            <button
              onClick={handleBack}
              className="text-2xl mx-2 my-1 hover:rounded-full p-1  hover:bg-gray-900  "
            >
              <IoMdArrowRoundBack />
            </button>
            <div className="relative w-full h-48 bg-blue-900">
              <Image
                height={1040}
                width={1040}
                src={currentuser?.coverImage || ""}
                alt="Profile background"
                className="object-cover w-full h-full"
              />
              <div className="relative">
                <div className="absolute bottom-5 left-3 transform translate-y-1/2">
                  <Image
                    src={currentuser?.profileImage || ""}
                    width={150}
                    height={150}
                    alt="Profile"
                    className="rounded-full w-24 h-24 border-4 border-black"
                  />
                </div>
              </div>

              <div className="mt-12 px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold"></h1>
                    <p className="text-gray-400">@{currentuser?.userName}</p>
                  </div>
                  <button className="bg-transparent border border-gray-500 px-3 py-1 rounded-full text-sm hover:bg-gray-800">
                    Edit Profile
                  </button>
                </div>

                <p className="mt-4"></p>
                <p className="mt-2 text-gray-400">CSE'25</p>

                <div className="mt-4 flex space-x-6">
                  <div className="flex items-center">
                    <span className="font-bold">
                      {" "}
                      {currentuser?.followingIds?.length}
                    </span>
                    <span className="text-gray-400 ml-1"> Following</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold">
                      {" "}
                      {currentuser?.followersIds?.length}
                    </span>
                    <span className="text-gray-400 ml-1">Followers</span>
                  </div>
                </div>
              </div>
              <BottomProfile UserInfo={currentuser} />
            </div>
          </div>
        </div>

        {/* {loading ? (
        <div className="h-56 p-2 my-4 rounded-md w-80 bg-gray-800">
          <div className="h-6 w-28 p-2 bg-gray-700 rounded"></div>
          <SkeletonFollowBar />
          <SkeletonFollowBar />
          <SkeletonFollowBar />
        </div>
      ) : ( */}

        <FollowBar
          UserData={userData}
          followStatus={followStatus}
          setFollowStatus={setFollowStatus}
        />
        {/* )} */}

        <div className=" flex  ">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default FollowingUserProfile;
