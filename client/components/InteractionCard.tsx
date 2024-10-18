import { FetchComments } from "@/actions/action";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const InteractionCard = ({ postdata, commentcount }: any) => {
  const filteredComments = commentcount.filter(
    (comment: any) => comment.postId === postdata.id
  );
  return (
    <div>
      <div className="flex justify-between sm:space-x-24 mt-2 w-full sm:w-[50%]">
        <div className="flex items-center space-x-2">
          <BiMessageRounded size={20} />
          <span className="hidden sm:block text-xs">
            {filteredComments.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaRetweet size={20} />
          <span className="hidden sm:block text-md">5</span>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineHeart size={20} />
          <span className="hidden sm:block text-md">20</span>
        </div>
        <div className="flex items-center space-x-2">
          <BiUpload size={20} />
        </div>
      </div>
    </div>
  );
};

export default InteractionCard;
