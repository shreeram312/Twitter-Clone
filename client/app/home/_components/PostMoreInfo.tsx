import Image from "next/image";
import React, { useState } from "react";
import ReplyBox from "./ReplyBox";

const PostMoreInfo = ({ postmore }: any) => {
  const [commentlist, setcommentlist] = useState<any[]>([]);
  const formattedDate = new Date(postmore?.createdAt).toLocaleDateString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "long",
    }
  );

  return (
    <div className="max-w-xl mx-auto p-4 border-b border-gray-700 text-white space-y-4">
      {/* User Profile Section */}
      <div className="flex items-start justify-between">
        <div className="flex space-x-4 items-center">
          <Image
            src={postmore?.user?.profileImage}
            height={50}
            width={50}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold text-base">{postmore?.user?.name}</p>
            <p className="text-sm text-gray-400">@{postmore?.user?.userName}</p>
          </div>
        </div>
      </div>

      <div className="whitespace-pre-wrap text-lg mx-4 text-gray-200 leading-relaxed">
        <p>{postmore?.bodyContent}</p>
      </div>

      <p className="text-sm text-gray-500">{formattedDate}</p>

      <div className="flex space-x-6 text-gray-500 text-sm">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
          <i className="far fa-heart"></i>
          <span>{postmore?.likesCount ?? 0} Likes</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
          <i className="far fa-heart"></i>
          <span>{commentlist.length} Comments</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
          <i className="far fa-share-square"></i>
          <span>Share</span>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-3 mt-3">
        <ReplyBox
          postmore={postmore}
          commentlist={commentlist}
          setcommentlist={setcommentlist}
        />
      </div>
    </div>
  );
};

export default PostMoreInfo;
