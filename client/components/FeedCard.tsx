import React, { useCallback } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InteractionCard from "./InteractionCard";

const FeedCard = ({
  postdata,
  comments,
  likes,
  postId,
  userId,
  postImage,
}: any) => {
  const router = useRouter();

  const handleChangeRoute = useCallback(
    (id: any) => {
      router.push(`/home/${id}`);
    },
    [router]
  );

  return (
    <div
      onClick={() => handleChangeRoute(postdata?.id)}
      className="grid grid-cols-12 border-b border-gray-700 p-4 transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="col-span-2 sm:col-span-1">
        <Image
          className="rounded-full"
          src={postdata.user.profileImage}
          alt="userimage"
          width={50}
          height={50}
        />
      </div>

      <div className="col-span-10 sm:col-span-11 mx-2">
        <h5 className="font-bold text-cyan-200 text-sm">
          {postdata.user.userName}
        </h5>
        {/* Add proper text wrapping and overflow control here */}

        <p className="text-sm sm:text-base break-words overflow-hidden">
          {postdata.bodyContent}
        </p>
        {postImage && (
          <Image
            className="p-2"
            src={postImage}
            height={450}
            width={450}
            alt="noimage"
          />
        )}
      </div>

      <div className="mx-12 p-2">
        <InteractionCard
          comments={comments}
          likes={likes}
          postdata={postdata}
          postId={postId}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default FeedCard;
