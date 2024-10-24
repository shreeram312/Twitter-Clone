"use client";
import FollowBar from "@/components/FollowBar";
import SideBarItem from "@/components/SideBarItem";
import SidebarTweetButton from "@/components/SidebarTweetButton";
import React, { useCallback, useEffect, useState } from "react";
import { SidebarMenuItems } from "@/libs/sideitems";
import { FaTwitter } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";

import { FetchParticularPost } from "@/actions/action";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import PostMoreInfo from "../_components/PostMoreInfo";
import { AnyCnameRecord } from "dns";
import Trending from "@/components/Trending";

interface PostData {
  id: string;
  userId: string;
  bodyContent: string;
}

const PostIdSlug = () => {
  const params = useParams();
  const router = useRouter();
  const [postmore, setPostMore] = useState<any>();
  const postId = Array.isArray(params.profileId)
    ? params.profileId[0]
    : params.profileId;

  console.log(postmore);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await FetchParticularPost(postId);
        console.log(res);
        setPostMore(res);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    getData();
  }, []);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
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
        {postmore ? <PostMoreInfo postmore={postmore} /> : <Spinner />}
      </div>

      <FollowBar UserData={postmore?.user} />
      <div className=" flex  items-center">
        <Trending />
      </div>
    </div>
  );
};

export default PostIdSlug;
