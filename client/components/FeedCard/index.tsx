import React from "react";
import Image from "next/image";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-b-gray-300">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/126177107?v=4"
            alt="userimage"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-8">
          <h5>Shreeram Mutukundu</h5>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
