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
  console.log(postdata.user.id);
  useEffect(() => {
    setisliked(postdata?.posts?.likedIds?.includes(postdata.user.id));
  }, [postdata?.posts?.likedIds, postdata.user.id]);

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

  const handleRetweet = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Retweet clicked!");
  };

  return (
    <div>
      <div className="flex justify-between space-x-7  mt-2 w-full sm:gap-10 sm:mx-2 -mx-10 gap-3  sm:w-[50%]">
        <div className="flex items-center space-x-2">
          <BiMessageRounded size={24} />
          <span className=" sm:block text-lg">{comments}</span>
        </div>
        <div className="flex items-center space-x-2" onClick={handleRetweet}>
          <FaRetweet size={24} />
          <span className="sm:block text-lg">5</span>
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
          <span className=" sm:block text-lg">{likeCount}</span>
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
