"use client";
import { Twitter } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Intro() {
  const { userId } = useAuth();
  const router = useRouter();

  // function handlenavigate() {

  //   if (userId) {
  //     router.push("/home");
  //   } else {
  //     router.push("/userdetails");
  //   }
  // }

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, [userId, router]);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
      {/* Left Section for large screens */}
      <div className="flex-1 hidden lg:flex items-center justify-center bg-cover bg-center">
        <div className="text-center px-8">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Join the conversation
          </h1>
          <p className="text-xl max-w-lg mx-auto opacity-90">
            Discover what’s happening in the world in real-time. Be part of the
            global conversation.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
        <div className="flex flex-col items-center lg:items-start">
          <Twitter className="w-12 h-12 text-blue-400 mb-8" />
          <h1 className="text-5xl font-bold mb-8">What's happening now</h1>
          <h2 className="text-3xl font-semibold mb-8">Join Twitter today.</h2>
          <div className="space-y-4 max-w-xs w-full">
            {/* Sign In Button */}
            <SignInButton
              // This will redirect after successful sign-in
              forceRedirectUrl={"/userdetails"}
            >
              <button className="w-full bg-blue-400 text-black font-bold py-3 rounded-full hover:bg-blue-500 transition duration-200">
                Get Started
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  );
}
