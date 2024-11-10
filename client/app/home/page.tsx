"use client";
import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import MainSection from "@/components/MainSection";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import FollowBar from "@/components/FollowBar";
import { useRouter } from "next/navigation";
import { SidebarMenuItems } from "@/libs/sideitems";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import Trending from "@/components/Trending";
import SkeletonFollowBar from "@/libs/SkeletonFollowbar";
import FollowingFeedCard from "@/components/FollowingFeedCard";
import { useAppContext } from "@/context";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("forYou");
  const router = useRouter();

  const { getToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [followingposts, setfollowingposts] = useState<any[]>([]);

  const { userData, setUserData, followStatus, setFollowStatus } =
    useAppContext();
  console.log(process.env.NEXT_PUBLIC_SERVER_API);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      if (token) {
        localStorage.setItem("token", token);
      }

      try {
        const res = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    //  eslint-disable-next-line
  }, []);

  useEffect(() => {
    try {
      const followingpost = async () => {
        const token = await getToken();
        const res = await axios.get("/api/user/post/following", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

        setfollowingposts(res.data);
      };

      followingpost();
    } catch (e) {
      console.log(e);
    }
    //  eslint-disable-next-line
  }, [followStatus, userData.id]);
  return (
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

        {activeTab === "forYou" ? (
          <MainSection
            setuserData={setUserData}
            userData={userData}
            loading={loading}
            setLoading={setLoading}
          />
        ) : (
          <div>
            <FollowingSection
              followingposts={followingposts}
              userId={userData?.id}
            />
          </div>
        )}
      </div>

      {/* {loading ? (
        <div className="h-56 p-2  my-4 rounded-md w-80 bg-gray-800">
          <div className="h-6 w-28 p-2 bg-gray-700 rounded"></div>{" "}
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
      <div className=" flex ">
        <Trending />
      </div>
    </div>
  );
}

const FollowingSection = ({ followingposts, userId }) => {
  return (
    <div>
      {followingposts.length > 0 &&
        followingposts.map((data: any) => (
          <FollowingFeedCard
            key={data?.id}
            followingposts={data}
            userId={userId}
          />
        ))}
    </div>
  );
};

export default Dashboard;
