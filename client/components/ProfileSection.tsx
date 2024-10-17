import React, { useEffect, useState } from "react";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import BottomProfile from "./BottomProfile";

interface UserInfoState {
  id?: string;
  name?: string;
  userName?: string;
  bio?: string;
  profileImage?: string;
  coverImage?: string; // Add coverImage to state
}

export default function ProfileSection() {
  const [UserInfo, setUserInfo] = useState<UserInfoState>({});
  const [coverurl, setcoverurl] = useState("");
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchRes = async () => {
      const token = await getToken();
      if (!token) {
        console.error("No token available");
        return;
      }
      try {
        const res = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(res.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchRes();
  }, []);

  useEffect(() => {
    if (coverurl) {
      const updateCoverImage = async () => {
        try {
          const res = await axios.patch("/api/user", {
            coverImage: coverurl,
            userName: UserInfo.userName,
          });
          // Optionally update UserInfo state to reflect the changes
          setUserInfo((prev) => ({ ...prev, coverImage: coverurl }));
        } catch (error) {
          console.error("Error updating cover image:", error);
        }
      };
      updateCoverImage();
    }
  }, [coverurl, UserInfo.userName]); // Update the cover image only if coverurl changes

  return (
    <div className="bg-black text-white min-h-screen p-2">
      <div className="relative w-full h-48 bg-blue-900">
        <CldUploadWidget
          onSuccess={(results: any) => setcoverurl(results?.info?.url)}
          uploadPreset="shree-image"
        >
          {({ open }) => (
            <button
              className="absolute right-0 bg-black rounded-md p-1 my-1"
              onClick={() => open()}
            >
              Cover Image
            </button>
          )}
        </CldUploadWidget>
        <Image
          height={1040}
          width={1040}
          src={UserInfo.coverImage || ""}
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
        <BottomProfile UserInfo={UserInfo} />
      </div>
    </div>
  );
}
