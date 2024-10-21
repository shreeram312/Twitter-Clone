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
  const [isliked, setisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  useEffect(() => {
    setisliked(postdata.likedIds.includes(postdata.user.id));
  }, [postdata.likedIds, postdata.user.id]);

  const handleLike = async (
    e: React.MouseEvent,
    postId: string,
    userId: string
  ) => {
    e.stopPropagation();
    try {
      const res = await ToggleLikePost(postId, userId);
      console.log(res);

      if (isliked) {
        setisliked(false);
        setLikeCount((prevCount: any) => prevCount - 1);
      } else {
        setisliked(true);
        setLikeCount((prevCount: any) => prevCount + 1);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleComment = (e: React.MouseEvent) => {
    console.log("Comment clicked!");
  };

  const handleRetweet = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Retweet clicked!");
  };

  return (
    <div>
      <div className="flex justify-between sm:space-x-24 mt-2 w-full sm:w-[50%]">
        <div className="flex items-center space-x-2" onClick={handleComment}>
          <BiMessageRounded size={24} />
          <span className="hidden sm:block text-lg">{comments}</span>
        </div>
        <div className="flex items-center space-x-2" onClick={handleRetweet}>
          <FaRetweet size={24} />
          <span className="hidden sm:block text-lg">5</span>
        </div>
        <div
          className="flex items-center space-x-2"
          onClick={(e) => handleLike(e, postId, userId)}
        >
          {isliked ? (
            <FcLike size={24} className="cursor-pointer" />
          ) : (
            <AiOutlineHeart size={24} className="cursor-pointer" />
          )}
          <span className="hidden sm:block text-lg">{likeCount}</span>
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
