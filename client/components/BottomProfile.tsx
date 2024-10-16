import React from "react";

const BottomProfile = () => {
  return (
    <div>
      <div className="border-b border-gray-700 mt-6">
        <div className="flex space-x-6 text-gray-400">
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

      <div className="mt-6 p-4 border border-gray-700 rounded-lg">
        <p className="text-gray-400 text-sm">Pinned</p>
        <p className="mt-2">
          <span className="font-bold">Shreeram Mutukundu</span>{" "}
          <span className="text-gray-400">@realshreeram312 · Apr 3</span>
        </p>
        <p className="mt-2">
          T-100
          <br />
          Day 100/100🎉
          <br />
          1) Learned about Stacks and solved Maximal Rectangle problem.
          <br />
          2) Managed to understand folding algorithms...
        </p>
      </div>
    </div>
  );
};

export default BottomProfile;
