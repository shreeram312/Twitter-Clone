import { ToggleLikePost } from "@/actions/action";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const FollowingInteractionCard = ({ followingposts, userId }) => {
  const [isliked, setisliked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState(
    followingposts?.likedIds?.length || 0
  );

  useEffect(() => {
    setisliked(followingposts?.likedIds?.includes(userId));
  }, [followingposts, userId]);

  const handleLike = async (postId: any, userId: any, e: any) => {
    e.stopPropagation();
    try {
      const res = await ToggleLikePost(postId, userId);
      console.log(res);
      if (isliked) {
        setisliked(false);
        setLikeCount((prevCount) => prevCount - 1);
      } else {
        setisliked(true);
        setLikeCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between sm:space-x-24 mt-2 w-full sm:w-[50%]">
        <div className="flex items-center space-x-2">
          <BiMessageRounded size={24} />
          <span className="hidden sm:block text-lg">
            {followingposts.comments?.length || 0}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <FaRetweet size={24} />
          <span className="hidden sm:block text-lg">
            {followingposts.retweets || 0}
          </span>
        </div>

        <div
          onClick={(e) => handleLike(followingposts?.id, userId, e)}
          className="flex items-center space-x-2"
        >
          {isliked ? (
            <div>
              <FcLike size={24} className="cursor-pointer" />
            </div>
          ) : (
            <AiOutlineHeart size={24} className="cursor-pointer" />
          )}
          <span className="hidden sm:block text-lg">{likeCount}</span>
        </div>

        <div className="flex items-center space-x-2">
          <BiUpload size={20} />
        </div>
      </div>
    </div>
  );
};

export default FollowingInteractionCard;
