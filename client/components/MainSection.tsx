"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import FeedCard from "./FeedCard";
import { IoMdArrowRoundBack } from "react-icons/io";

interface MainSectionProps {
  label: string;
  showBackArrow?: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleback = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div>
      <div className="flex flex-row item-center ">
        {showBackArrow && (
          <IoMdArrowRoundBack
            onClick={handleback}
            color="white"
            className="px-2 cursor-pointer hover:opacity-70"
            size={40}
          />
        )}

        <h1 className=" text-xl my-2">{label}</h1>
      </div>

      <div className="border border-r-0 border-l-0 border-gray-700 p-3 hover:bg-slate-900 transition-all cursor-pointer">
        <FeedCard />
      </div>
    </div>
  );
};

export default MainSection;
