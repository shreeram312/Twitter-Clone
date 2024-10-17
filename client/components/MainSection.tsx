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

interface MainSectionProps {
  label?: string;
  showBackArrow?: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const [userData, setuserData] = useState<any>(null);
  const [postdata, setpostdata] = useState<any[]>([]);
  const { getToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      setLoading(true);
      if (token) {
        localStorage.setItem("token", token);
      }
      console.log(token);
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
    setpostdata((prevPosts) => [...prevPosts, newPost]);
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

      <div className="border border-r-0 border-l-0 border-gray-700 transition-all cursor-pointer">
        {Array.isArray(postdata) && postdata.length > 0 ? (
          postdata.map((postdata: any) => (
            <FeedCard key={postdata.id} postdata={postdata} />
          ))
        ) : (
          <div className=" flex items-center justify-center my-2 ">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
