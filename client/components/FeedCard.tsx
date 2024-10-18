import React, { useCallback } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import InteractionCard from "./InteractionCard";

const FeedCard = ({ postdata, commentcount }: any) => {
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
      className="grid grid-cols-12 border-b border-gray-700 p-2 transition duration-200 ease-in-out"
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
        <p className="text-sm sm:text-base">{postdata.bodyContent}</p>
      </div>
      <div className="mx-12 p-2 ">
        <InteractionCard postdata={postdata} commentcount={commentcount} />
      </div>
    </div>
  );
};

export default FeedCard;
