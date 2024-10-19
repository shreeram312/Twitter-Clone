import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const InteractionCard = ({ postdata }: any) => {
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();

    console.log("Post liked!");
  };

  const handleComment = (e: React.MouseEvent) => {
    // e.stopPropagation();

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
          <BiMessageRounded size={20} />
          <span className="hidden sm:block text-xs"></span>
        </div>
        <div className="flex items-center space-x-2" onClick={handleRetweet}>
          <FaRetweet size={20} />
          <span className="hidden sm:block text-md">5</span>
        </div>
        <div className="flex items-center space-x-2" onClick={handleLike}>
          <AiOutlineHeart size={20} className="cursor-pointer" />
          <span className="hidden sm:block text-md">20</span>
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
