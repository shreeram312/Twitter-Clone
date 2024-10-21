import Image from "next/image";
import React, { useEffect } from "react";
import InteractionCard from "./InteractionCard";

const PostCard = ({ data }: any) => {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="overflow-hidden break-words">
      <div className="mt-6 p-4 border border-gray-700 rounded-lg ">
        {/* <p className="text-gray-400 text-sm ">Pinned</p> */}
        <div className="mt-2 flex items-center ">
          <Image
            src={data.user.profileImage}
            width={40}
            height={40}
            alt="profileimage"
            className="rounded-full h-12 w-12"
          />
          <div className="ml-2">
            <span className="font-bold text-lg">{data.user.name}</span>
            <span className="text-gray-400">
              @{data.user.userName} · {formattedDate}{" "}
            </span>
          </div>
        </div>
        <p className=" mx-10 text-justify">{data.bodyContent}</p>
        {data.postImage && (
          <div className="mx-6 p-2">
            <Image
              src={data.postImage}
              height={450}
              width={450}
              alt="noimage"
            />
          </div>
        )}
        <div className="mx-6">
          <InteractionCard
            postdata={data}
            comments={data.comments?.length}
            likes={data?.likedIds?.length}
            userId={data?.userId}
            postId={data?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
