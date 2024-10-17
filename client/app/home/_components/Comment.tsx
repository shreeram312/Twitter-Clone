import React from "react";
import CommentCard from "./CommentCard";

const Comment = () => {
  return (
    <div className="">
      <div className=" text-white  rounded-md max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4 my-2">Comments</h2>

        {/* Comment Card Component */}
        <CommentCard />
      </div>
    </div>
  );
};

export default Comment;
