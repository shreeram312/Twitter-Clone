import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import Image from "next/image";

const FeedCard = ({}) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      {/* User Image */}
      <div className="col-span-2 sm:col-span-1">
        <Image
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/126177107?v=4"
          alt="userimage"
          width={50}
          height={50}
        />
      </div>

      {/* Post Content */}
      <div className="col-span-10 sm:col-span-11 mx-2">
        <h5 className="font-bold">Shreeram Mutukundu</h5>
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, neque corporis? Voluptatibus minima ullam sed, odit
          lorem100
        </p>

        {/* Action Icons */}
        <div className="flex justify-between sm:space-x-24 mt-2 w-full sm:w-[50%]">
          <div className="flex items-center space-x-2">
            <BiMessageRounded size={18} />
            <span className="hidden sm:block text-xs">10</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRetweet size={18} />
            <span className="hidden sm:block text-xs">5</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineHeart size={18} />
            <span className="hidden sm:block text-xs">20</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiUpload size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
