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
  setuserData: (data: any) => void;
  userData: any;
  loading: boolean;
  setLoading: (loading: boolean) => void;
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
  const [hasFetchedPosts, setHasFetchedPosts] = useState(false);
  const { getToken } = useAuth();

  const handleback = useCallback(() => {
    router.back();
  }, [router]);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const token = await getToken();
      const postres = await axios.get("/api/user/post", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setpostdata(postres.data);
      setHasFetchedPosts(true); // Prevents multiple fetches
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [getToken, setLoading]);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const token = await getToken();
      if (token) {
        localStorage.setItem("token", token);
      }
      const res = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setuserData(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [getToken, setLoading, setuserData]);

  useEffect(() => {
    if (!userData) fetchUser();
  }, [fetchUser, userData]);

  useEffect(() => {
    if (!hasFetchedPosts && !loading) fetchPosts();
  }, [fetchPosts, hasFetchedPosts, loading]);

  const addPost = (newPost: any) => {
    setpostdata((prevPosts) => [newPost, ...prevPosts]);
  };

  const handleDeletePost = (postId: string) => {
    setpostdata((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <div className="flex flex-row items-center mx-auto">
        {showBackArrow && (
          <IoMdArrowRoundBack
            onClick={handleback}
            color="white"
            className="cursor-pointer hover:opacity-70"
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
      <div className="border border-r-0 border-l-0 border-gray-700 transition-all h-auto cursor-pointer text-wrap">
        {loading ? (
          <SkeletonCard />
        ) : Array.isArray(postdata) && postdata.length > 0 ? (
          postdata.map((post: any) => (
            <FeedCard
              key={post.id}
              postdata={post}
              comments={post?.comments?.length}
              likes={post?.likedIds?.length}
              likedIds={post?.likedIds}
              postId={post?.id}
              userId={post?.userId}
              postImage={post?.postImage}
              onDelete={handleDeletePost}
            />
          ))
        ) : (
          <div className="text-center"> No posts Yet</div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
