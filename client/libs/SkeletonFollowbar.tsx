// SkeletonLoader.tsx
import React from "react";

const SkeletonFollowBar = () => {
  return (
    <div className="my-2  flex items-center justify-between   bg-gray-900 p-2 rounded-md animate-pulse">
      <div className="flex items-center space-x-4 ">
        <div className="w-8 h-8 rounded-full bg-gray-700"></div>{" "}
        <div className="h-4 w-24 bg-gray-700 rounded"></div>{" "}
      </div>
      <div className="h-8 w-20 bg-gray-700 rounded"></div>{" "}
    </div>
  );
};

export default SkeletonFollowBar;
