import React from "react";

const SkeletonFeedCard = () => {
  return (
    <div className="grid grid-cols-12 border-b border-gray-700  animate-pulse transition duration-200 ease-in-out p-6">
      <div className="col-span-2 sm:col-span-1">
        <div className="rounded-full bg-gray-700 h-12 w-12"></div>
      </div>

      <div className="col-span-10 sm:col-span-11 mx-2 ">
        <div className="bg-gray-700 h-4 w-[10px] mb-2 rounded text-gray-700">
          hb
        </div>

        <div className="bg-gray-700 h-20 w-full p-2  rounded text-gray-700">
          kzdhd
        </div>
      </div>

      <div className="flex justify-between sm:space-x-24 mt-2 mx-12 w-full sm:w-[50%]">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-700 h-5 w-5 rounded-full "></div>
          <span className="hidden sm:block bg-gray-700 h-2 w-8 rounded"></span>
        </div>

        <div className="flex items-center space-x-2 mx-6">
          <div className="bg-gray-700 h-5 w-5 rounded-full"></div>
          <span className="hidden sm:block bg-gray-700 h-2 w-8 rounded"></span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-gray-700 h-5 w-5 rounded-full"></div>
          <span className="hidden sm:block bg-gray-700 h-2 w-8 rounded"></span>
        </div>

        <div className="flex ">
          <div className="bg-gray-700 h-5 w-5   rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeedCard;
