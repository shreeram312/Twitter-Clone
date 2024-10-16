"use client";
import axios from "axios";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import BottomProfile from "./BottomProfile";
import { CldUploadWidget } from "next-cloudinary";

interface UserInfoState {
  id?: string;
  name?: string;
  userName?: string;
  bio?: string;
  profileImage?: string;
}

export default function ProfileSection() {
  const [UserInfo, setUserInfo] = useState<UserInfoState>({});
  const [coverurl, setcoverurl] = useState();
  useEffect(() => {
    const fetchRes = async () => {
      const res = await axios.get("/api/user");
      console.log(res.data);
      setUserInfo(res.data);
    };
    fetchRes();
  }, []);

  useEffect(() => {
    const updateCoverImage = async () => {
      const res = await axios.patch("/api/user", {
        coverImage: coverurl,
        userName: UserInfo.userName,
      });
      console.log(res);
    };
    updateCoverImage();
  }, [coverurl]);
  console.log(UserInfo);

  return (
    <div className="bg-black text-white min-h-screen p-2">
      <div className="relative w-full h-48 bg-blue-900">
        <CldUploadWidget
          onSuccess={(results: any) => setcoverurl(results?.info?.url)}
          uploadPreset="shree-image"
        >
          {({ open }) => {
            return (
              <button
                className="absolute right-0  bg-black rounded-md p-1 my-1"
                onClick={() => open()}
              >
                Cover Image
              </button>
            );
          }}
        </CldUploadWidget>
        <Image
          height={1040}
          width={1040}
          src={coverurl || ""}
          alt="Profile background"
          className="object-cover w-full h-full"
        />

        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <Image
            src={UserInfo.profileImage || ""}
            width={150}
            height={140}
            alt="Profile"
            className="rounded-full w-24 h-24 border-4 border-black"
          />
        </div>
      </div>

      <div className="mt-12 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{UserInfo.name}</h1>
            <p className="text-gray-400">@{UserInfo.userName}</p>
          </div>

          <button className="bg-transparent border border-gray-500 px-3 py-1 rounded-full text-sm hover:bg-gray-800">
            Edit Profile
          </button>
        </div>

        <p className="mt-4">{UserInfo.bio}</p>
        <p className="mt-2 text-gray-400">CSE'25</p>

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

      <BottomProfile />
    </div>
  );
}
