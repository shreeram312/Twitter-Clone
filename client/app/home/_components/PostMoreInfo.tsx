import Image from "next/image";
import React from "react";
import Comment from "./Comment";
import ReplyBox from "./ReplyBox";

const PostMoreInfo = ({ postmore }: any) => {
  const formatedDate = new Date(postmore?.createdAt).toLocaleDateString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "long",
    }
  );
  return (
    <div className="max-w-lg mx-auto p-1 border-b border-gray-700 text-white">
      <div className="flex items-start justify-between">
        <div className="flex space-x-2">
          <Image
            src={postmore?.user?.profileImage}
            height={50}
            width={50}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">{postmore?.user?.name}</p>
            <p className="text-sm text-gray-400">@{postmore?.user?.userName}</p>
          </div>
        </div>
      </div>

      {/* Tweet Content */}
      <div className="mt-2 ">
        <p>
          <span className="">{postmore?.bodyContent}</span>
        </p>

        <p className="text-sm my-2 text-gray-500">{formatedDate}</p>
      </div>
      <div className="my-3">
        <ReplyBox />
      </div>

      <Comment />
    </div>
  );
};

export default PostMoreInfo;
