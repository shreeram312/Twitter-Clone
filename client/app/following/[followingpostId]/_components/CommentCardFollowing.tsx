import Image from "next/image";
import React from "react";

const CommentCardFollowing = ({ comment }: any) => {
  return (
    <div className="flex items-start mt-4 px-4 py-2 border-b border-gray-700">
      <div className="flex-shrink-0">
        <Image
          className="w-10 h-10 rounded-full"
          src={comment?.user?.profileImage}
          alt={`${comment?.user?.userName || "Unknown User"}'s profile`}
          height={200}
          width={200}
        />
      </div>

      <div className="flex-grow ml-3">
        <div className="flex items-center">
          <p className="text-sm font-semibold text-white">
            {comment?.user?.userName || "Unknown User"}
          </p>
          <p className="ml-2 text-sm text-gray-400">
            @{comment?.user?.userName || "unknown"}
          </p>
        </div>

        <p className="text-white mt-1">{comment.body}</p>

        <div className="flex items-center mt-2 text-gray-400 space-x-4 text-sm">
          <span>{"12h"}</span>
          <button className="hover:underline">Reply</button>
          <button className="hover:underline">Like</button>
        </div>
      </div>
    </div>
  );
};

export default CommentCardFollowing;
