"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FeedCard from "./FeedCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import PostBox from "./PostBox";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import SkeletonCard from "@/libs/SkeletonCard";

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
}) => {
  const router = useRouter();

  const [postdata, setpostdata] = useState<any[]>([]);
  const { getToken } = useAuth();

  const handleback = useCallback(() => {
    router.back();
    //  eslint-disable-next-line
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
    //  eslint-disable-next-line
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
    //  eslint-disable-next-line
  }, []);

  const addPost = (newPost: any) => {
    setpostdata((prevPosts) => [newPost, ...prevPosts]);
  };

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
        {Array.isArray(postdata) &&
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
          })}
        {loading && (
          <div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </div>
    </div>
  );
};
export default MainSection;
