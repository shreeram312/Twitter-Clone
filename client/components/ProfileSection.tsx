import React from "react";
import { FaTwitter } from "react-icons/fa"; // Use this or any other icons you need

const ProfileSection = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Profile Header */}
      <div className="relative w-full h-48 bg-blue-900">
        {/* Background Image */}
        {/* <img
          src="/path-to-your-background-image.jpg"
          alt="Profile background"
          className="object-cover w-full h-full"
        /> */}
        {/* Profile Image */}
        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          {/* <img
            src="/path-to-your-profile-image.jpg"
            alt="Profile"
            className="rounded-full w-24 h-24 border-4 border-black"
          /> */}
        </div>
      </div>

      {/* Profile Details */}
      <div className="mt-12 px-4">
        <div className="flex justify-between items-center">
          {/* Name and Handle */}
          <div>
            <h1 className="text-2xl font-bold">Shreeram Mutukundu</h1>
            <p className="text-gray-400">@realshreeram312</p>
          </div>
          {/* Edit Button */}
          <button className="bg-transparent border border-gray-500 px-3 py-1 rounded-full text-sm hover:bg-gray-800">
            Edit Profile
          </button>
        </div>

        {/* Bio */}
        <p className="mt-4">
          Aspiring MERN stack developer 🚀 | Passionate about coding, learning,
          and building web applications
        </p>
        <p className="mt-2 text-gray-400">CSE'25</p>

        {/* Stats */}
        <div className="mt-4 flex space-x-6">
          <div className="flex items-center">
            <span className="font-bold">113</span>
            <span className="text-gray-400 ml-1">Following</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold">25</span>
            <span className="text-gray-400 ml-1">Followers</span>
          </div>
        </div>
      </div>

      {/* Tabs (Posts, Replies, etc.) */}
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

      {/* Pinned Post */}
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

export default ProfileSection;
