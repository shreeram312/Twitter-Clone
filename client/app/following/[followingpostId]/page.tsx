"use client";
import { FetchParticularPost } from "@/actions/action";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import Trending from "@/components/Trending";
import { SidebarMenuItems } from "@/libs/sideitems";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import PostMoreInfoFollowing from "./_components/PostMoreInfoFollowing";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import SkeletonCard from "@/libs/SkeletonCard";

const FollowingPageId = () => {
  const router = useRouter();
  const params = useParams();
  const { getToken } = useAuth();

  const [postmore, setPostMore] = useState<any>([]);
  const [userinfo, setuserinfo] = useState<any>({});
  const [loading, setLoading] = useState(false);
  console.log(params.followingpostId);
  const postId = Array.isArray(params.followingpostId)
    ? params.followingpostId[0]
    : params.followingpostId;

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  console.log(postmore);
  console.log("sdjns");

  useEffect(() => {
    const func = async () => {
      try {
        const token = getToken();
        console.log(token, "edl");
        const res1 = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setuserinfo(res1.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    func();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await FetchParticularPost(postId);
        console.log(res);
        console.log("jdfnkld");
        setPostMore(res);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
    //  eslint-disable-next-line
  }, [postId]);

  return (
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
              onClick={handleBack}
              className="text-3xl mx-2 my-2 hover:rounded-full p-2  hover:bg-gray-900  "
            >
              <IoMdArrowRoundBack />
            </button>

            <p className="my-4 mx-2 text-2xl ">Post</p>
          </div>

          <PostMoreInfoFollowing
            postmore={postmore}
            loadingdo={loading}
            userinfo={userinfo}
          />
        </div>

        <div className=" flex mx-24 ">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default FollowingPageId;
