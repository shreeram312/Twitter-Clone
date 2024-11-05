import React, { useCallback } from "react";
import Image from "next/image";
import FollowingInteractionCard from "./FollowingInteractionCard";
import { useRouter } from "next/navigation";

const FollowingFeedCard = ({ followingposts, userId }) => {
  const router = useRouter();

  const handleroute = useCallback(() => {
    router.push(`/following/${followingposts?.id}`);
  }, [router, followingposts?.id]);

  return (
    <div className="grid grid-cols-12 border-b border-gray-700 p-4 transition duration-200 ease-in-out">
      <div className="col-span-2 sm:col-span-1 cursor-pointer">
        <Image
          className="rounded-full -my-1"
          src={followingposts.user.profileImage}
          alt="userimage"
          width={100}
          height={100}
        />
      </div>

      <div
        onClick={handleroute}
        className="col-span-10 sm:col-span-11 -my-2 cursor-pointer "
      >
        <h5 className="font-bold text-cyan-200 text-sm p-3 cursor-pointer">
          {followingposts.user.userName}
        </h5>
        <p className="text-sm sm:text-base mx-2 -my-2 py-3 break-words overflow-hidden h-16">
          {followingposts.bodyContent}
        </p>
        {followingposts.postImage && (
          <div>
            <Image
              className="p-2"
              src={followingposts.postImage || ""}
              height={450}
              width={450}
              alt="noimage"
            />
          </div>
        )}
      </div>

      <div className="col-span-12 mx-10">
        <FollowingInteractionCard
          followingposts={followingposts}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default FollowingFeedCard;
