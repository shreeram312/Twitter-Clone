import { ToggleLikePost } from "@/actions/action";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const InteractionCard = ({
  comments,
  likes,
  postdata,
  postId,
  userId,
}: any) => {
  const [isliked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(postdata?.likedIds?.length);

  useEffect(() => {
    const userId = postdata?.user?.id;
    const isPostLiked = postdata?.likedIds?.includes(userId);
    setIsLiked(isPostLiked);
  }, [postdata, userId]);

  const handleLike = async (
    e: React.MouseEvent,
    postId: string,
    userId: string
  ) => {
    e.stopPropagation();
    try {
      const res = await ToggleLikePost(postId, userId);
      console.log(res);

      // Optimistically update the UI
      setIsLiked((prev) => !prev);
      setLikeCount((prevCount) => (isliked ? prevCount - 1 : prevCount + 1));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleRetweet = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Retweet clicked!");
  };

  return (
    <div>
      <div className="flex justify-between space-x-7 mt-2 w-full sm:gap-10 sm:mx-2 -mx-10 gap-3 sm:w-[50%]">
        <div className="flex items-center space-x-2">
          <BiMessageRounded size={24} />
          <span className="sm:block text-lg">{comments}</span>
        </div>
        <div className="flex items-center space-x-2" onClick={handleRetweet}>
          <FaRetweet size={24} />
          <span className="sm:block text-lg">5</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={(e) => handleLike(e, postId, userId)}
        >
          {isliked ? <FcLike size={24} /> : <AiOutlineHeart size={24} />}
          <span className="sm:block text-lg">{likeCount}</span>
        </div>
        <div
          className="flex items-center space-x-2"
          onClick={(e) => e.stopPropagation()}
        >
          <BiUpload size={20} />
        </div>
      </div>
    </div>
  );
};

export default InteractionCard;
