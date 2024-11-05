"use client";
import FetchPosts from "@/actions/action";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Spinner from "./Spinner";

import { useRouter } from "next/navigation";

const BottomProfile = ({ UserInfo }: any) => {
  const [posts, setPosts] = useState<any>([]);
  const router = useRouter();
  console.log(UserInfo);

  useEffect(() => {
    const getBottomPosts = async () => {
      try {
        const ans = await FetchPosts(UserInfo.id);

        setPosts(ans);
      } catch (e) {
        console.log(e);
      }
    };

    getBottomPosts();
  }, [UserInfo.id, UserInfo.profileImage]);

  return (
    <div>
      <div className="border-b border-gray-700 mt-6 ">
        <div className="flex space-x-6 text-gray-400 gap-5 mx-3">
          <button className="pb-2 border-b-4 border-blue-500 text-white">
            Posts
          </button>
          <button className="pb-2 hover:text-white">Replies</button>
          <button className="pb-2 hover:text-white">Highlights</button>
          <button className="pb-2 hover:text-white">Articles</button>
          <button className="pb-2 hover:text-white">Media</button>
          <button className="pb-2 hover:text-white">Likes</button>
        </div>
      </div>

      {Array.isArray(posts) && posts?.length > 0 ? (
        posts.map((data: any) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(`/home/${data.id}`);
            }}
            key={data.id}
          >
            <PostCard data={data} />
          </div>
        ))
      ) : posts?.length <= 0 ? (
        <div className="text-center p-2">
          <p>No posts found Yet</p>
        </div>
      ) : (
        <div className="flex items-center justify-center my-2">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BottomProfile;
