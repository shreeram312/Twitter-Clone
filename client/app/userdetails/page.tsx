"use client";

import { useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

import { useAuth, useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

const ProfileDetails = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  const { user } = useUser();
  const { getToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await getToken();
      if (!token) {
        return toast.error("Please login to update your profile");
      }
      localStorage.setItem("token", token);
      if (user?.emailAddresses[0]?.emailAddress !== email) {
        console.error("Email does not match the authenticated user's email");
        alert("Email does not match the authenticated user's email");
        return;
      }

      const res = await axios.post("/api/user", {
        name,
        userName,
        bio,
        email,
        userAuthId: user?.id,
        profileImage: user?.imageUrl,
      });

      console.log(res);
      toast.success("User created succesfully");
      router.push("/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        {/* Header */}
        <h3 className="text-4xl font-bold text-white text-center p-2">
          Enter your Details
        </h3>

        {/* Profile Form */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3"
              />
            </div>

            {/* Username Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3"
              />
            </div>

            {/* Bio Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 h-24"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3"
              />
            </div>

            {/* Save Profile Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
