import Image from "next/image";
import InteractionCard from "./InteractionCard";
import FollowingInteractionCard from "./FollowingInteractionCard";

const PostCard = ({ data }: any) => {
  const formattedDate = new Date(data?.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="overflow-hidden break-words">
      <div className="mt-6 p-4 border border-gray-700 rounded-lg ">
        <div className="mt-2 flex items-center ">
          {data?.user?.profileImage ? (
            <div>
              <Image
                src={data?.user?.profileImage}
                width={40}
                height={40}
                alt="profile image"
                className="rounded-full h-12 w-12"
              />
            </div>
          ) : (
            <div className="col-span-2 sm:col-span-1">
              <div className="rounded-full bg-gray-700 h-12 w-12"></div>
            </div>
          )}

          <div className="ml-2">
            <span className="font-bold text-lg">{data?.user?.name}</span>
            <span className="text-gray-400">
              @{data?.user?.userName} · {formattedDate}{" "}
            </span>
          </div>
        </div>
        <p className=" mx-10 text-justify">{data?.bodyContent}</p>
        {data?.postImage && (
          <div className="mx-6 p-2">
            <Image
              src={data?.postImage}
              height={450}
              width={450}
              alt="noimage"
            />
          </div>
        )}

        <div className="mx-6">
          <FollowingInteractionCard
            followingposts={data}
            userId={data?.userId}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
