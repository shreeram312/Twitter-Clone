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

interface MainSectionProps {
  label?: string;
  showBackArrow?: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const [userData, setuserData] = useState<any>(null);
  const [postdata, setpostdata] = useState<any[]>([]);

  const handleback = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/api/user");
      setuserData(res.data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const postres = await axios.get("/api/user/post");
      setpostdata(postres.data);
    };
    fetchPosts();
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
        imageUrl={userData ? userData.profileImage : ""}
      />

      <div className="border border-r-0 border-l-0 border-gray-700 transition-all cursor-pointer">
        {postdata.map((data, index) => (
          <div key={data.id} className="my-2">
            <FeedCard postdata={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
