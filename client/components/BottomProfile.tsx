"use client";
import FetchPosts from "@/actions/action";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Spinner from "./Spinner";

interface BottomProfileProps {
  id?: string;
  name?: string;
  userName?: string;
  bio?: string;
  profileImage?: string;
  coverImage?: string;
}

const BottomProfile = ({ UserInfo }: any) => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const getBottomPosts = async () => {
      try {
        const ans = await FetchPosts(UserInfo.id);
        console.log(ans);
        setPosts(ans || []);
      } catch (e) {
        console.log(e);
      }
    };

    if (UserInfo.id) {
      getBottomPosts();
    }
  }, [UserInfo.id]);

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

      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((data: any) => <PostCard key={data.id} data={data} />)
      ) : (
        <div className=" flex items-center justify-center my-2 ">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BottomProfile;
