import Image from "next/image";
import React from "react";
import InteractionCard from "./InteractionCard";

const PostCard = ({ data }: any) => {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });
  return (
    <div>
      <div className="mt-6 p-4 border border-gray-700 rounded-lg">
        {/* <p className="text-gray-400 text-sm ">Pinned</p> */}
        <div className="mt-2 flex items-center">
          <Image
            src={data.user.profileImage}
            width={40}
            height={40}
            alt="profileimage"
            className="rounded-full"
          />
          <div className="ml-2">
            <span className="font-bold text-lg">{data.user.name}</span>
            <span className="text-gray-400">
              @{data.user.userName} · {formattedDate}{" "}
            </span>
          </div>
        </div>
        <p className=" mx-10 text-justify">{data.bodyContent}</p>
      </div>
    </div>
  );
};

export default PostCard;
