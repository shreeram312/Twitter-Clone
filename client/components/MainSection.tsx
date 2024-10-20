"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import FeedCard from "./FeedCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import PostBox from "./PostBox";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import Spinner from "./Spinner";
import SkeletonFeedCard from "@/libs/SkeletonFeedCard";
import InteractionCard from "./InteractionCard";
import { FetchComments } from "@/actions/action";

interface MainSectionProps {
  label?: string;
  showBackArrow?: boolean;
  setuserData: any;
  userData: any;
  loading: any;
  setLoading: any;
}

const MainSection: React.FC<MainSectionProps> = ({
  setuserData,
  userData,
  loading,
  setLoading,
  showBackArrow,
  label,
}: any) => {
  const router = useRouter();

  const [postdata, setpostdata] = useState<any[]>([]);
  const { getToken } = useAuth();

  const handleback = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = await getToken();
      setLoading(true);
      const postres = await axios.get("/api/user/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setpostdata(postres.data);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(postdata);
  console.log("hjj");
  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      setLoading(true);
      if (token) {
        localStorage.setItem("token", token);
      }

      const res = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setuserData(res.data);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const addPost = (newPost: any) => {
    setpostdata((prevPosts) => [newPost, ...prevPosts]);
  };

  console.log(postdata);

  return (
    <div>
      <div className="flex flex-row items-center">
        {showBackArrow && (
          <IoMdArrowRoundBack
            onClick={handleback}
            color="white"
            className=" cursor-pointer hover:opacity-70"
            size={40}
          />
        )}

        <h1 className="text-xl ">{label}</h1>
      </div>
      <PostBox
        userId={userData ? userData.id : null}
        addPost={addPost}
        imageUrl={userData?.profileImage}
      />

      <div className="border border-r-0 border-l-0 border-gray-700 transition-all h-auto cursor-pointer text-wrap ">
        {Array.isArray(postdata) ? (
          postdata.map((post: any) => {
            return (
              <FeedCard
                key={post.id}
                postdata={post}
                comments={post?.comments?.length}
                likes={post?.likedIds?.length}
                likedIds={post?.likedIds}
                postId={post?.id}
                userId={post?.userId}
                postImage={post?.postImage}
              />
            );
          })
        ) : (
          <div>
            <SkeletonFeedCard />
            <SkeletonFeedCard />
            <SkeletonFeedCard />
            <SkeletonFeedCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
