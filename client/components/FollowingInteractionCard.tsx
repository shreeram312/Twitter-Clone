import { ToggleLikePost } from "@/actions/action";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const FollowingInteractionCard = ({ followingposts, userId }) => {
  // Local state for each post
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const likedIds = followingposts?.likedIds || [];
    setIsLiked(likedIds.includes(userId));

    setLikeCount(likedIds.length);
  }, [followingposts, userId]);

  const handleLike = async (postId, userId, e) => {
    e.stopPropagation();
    try {
      await ToggleLikePost(postId, userId);

      setIsLiked((prevLiked) => {
        setLikeCount((prevCount) =>
          prevLiked ? prevCount - 1 : prevCount + 1
        );
        return !prevLiked;
      });
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
            {followingposts?.comments?.length || 0}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <FaRetweet size={24} />
          <span className="hidden sm:block text-lg">
            {followingposts?.retweets || 0}
          </span>
        </div>

        <div
          onClick={(e) => handleLike(followingposts?.id, userId, e)}
          className="flex items-center space-x-2"
        >
          {isLiked ? (
            <FcLike size={24} className="cursor-pointer" />
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
