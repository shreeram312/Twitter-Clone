import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FcLike } from "react-icons/fc";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ToggleLikePost } from "@/actions/action";

import ReplyBoxFollowing from "./ReplyBoxFollowing";
import SkeletonCard from "@/libs/SkeletonCard";
import { useAppContext } from "@/context";

const PostMoreInfoFollowing = ({ loadingdo, userinfo }: any) => {
  const [commentlist, setcommentlist] = useState<any[]>([]);
  const [isliked, setisliked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const { postmore } = useAppContext();

  const formattedDate = new Date(postmore?.createdAt).toLocaleDateString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "long",
    }
  );

  useEffect(() => {
    const userId = userinfo?.id;
    const isPostLiked = postmore?.likedIds?.includes(userId);
    setisliked(isPostLiked);

    setLikeCount(postmore?.likedIds?.length || 0);
  }, [postmore]);

  const handleLike = async (e: any, postId: string, userId: string) => {
    try {
      e.stopPropagation();
      setLoading(true);
      const res = await ToggleLikePost(postId, userId);
      console.log(res);

      if (isliked) {
        setisliked(false);
        setLikeCount((prevCount: any) => Number(prevCount - 1));
      } else {
        setisliked(true);
        setLikeCount((prevCount: any) => Number(prevCount + 1));
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-2 border-b border-gray-700 text-white space-y-4">
      {loadingdo ? (
        <SkeletonCard />
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex space-x-4 items-center">
            <Image
              src={postmore?.user?.profileImage}
              height={50}
              width={50}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold text-base">{postmore?.user?.name}</p>
              <p className="text-sm text-gray-400">
                @{postmore?.user?.userName}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="whitespace-pre-wrap break-words text-lg mx-4 text-gray-200 leading-relaxed">
        <p>{postmore?.bodyContent}</p>
      </div>

      {postmore?.postImage && (
        <div onClick={() => {}} className=" mx-6">
          <Image
            src={postmore.postImage}
            height={450}
            width={450}
            alt="noimage"
          />
        </div>
      )}

      <p className="text-sm text-gray-500">{formattedDate}</p>

      <div className="flex space-x-1 justify-between border-gray-600 text-gray-500 text-sm border-t-2">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 my-4">
          <BiMessageRounded size={24} />
          <span>{commentlist?.length ?? 0}</span>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 my-4">
          <FaRetweet size={24} />
          <span></span>
        </div>

        <div
          className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 my-4"
          onClick={(e) => handleLike(e, postmore?.id, userinfo.id)}
        >
          {isliked ? <FcLike size={24} /> : <FaRegHeart size={24} />}
          <span>{likeCount}</span>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 my-4">
          <BiUpload size={24} />
          <span>0</span>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-3 mt-3">
        <ReplyBoxFollowing
          postmore={postmore}
          commentlist={commentlist}
          setcommentlist={setcommentlist}
          userinfo={userinfo}
        />
      </div>
    </div>
  );
};

export default PostMoreInfoFollowing;
