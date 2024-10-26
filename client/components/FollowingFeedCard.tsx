import React, { useCallback } from "react";
import Image from "next/image";
import FollowingInteractionCard from "./FollowingInteractionCard";
import { useRouter } from "next/navigation";

const FollowingFeedCard = ({ followingposts, userId }) => {
  console.log(followingposts);
  const router = useRouter();
  const handleroute = useCallback(() => {
    router.push(`/following/${followingposts?.id}`);
    // eslint-disable-next-line
  }, [router]);

  return (
    <div
      onClick={handleroute}
      className="grid grid-cols-12 border-b  border-gray-700 p-4 transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="col-span-2 sm:col-span-1 ">
        <Image
          className="rounded-full -my-1"
          src={followingposts.user.profileImage}
          alt="userimage"
          width={100}
          height={100}
        />
      </div>
      {}

      <div className="col-span-10 sm:col-span-11  -my-2 ">
        <h5 className="font-bold text-cyan-200 text-sm p-3">
          {followingposts.user.userName}
        </h5>
        <p className="text-sm sm:text-base mx-2 -my-2 py-3 break-words overflow-hidden">
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
        <FollowingInteractionCard
          followingposts={followingposts}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default FollowingFeedCard;
