import React from "react";

const FollowBar: React.FC = () => {
  return (
    <div>
      <div className="p-2 w-64">
        <div className="bg-neutral-900  rounded-xl p-4 hidden md:block ">
          <h1 className="text-white  text-xl font-semibold">Who to follow</h1>
          <div className="flex flex-col gap-6 mt-4 ">todos use rlist</div>
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
