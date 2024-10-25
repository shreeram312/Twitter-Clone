import { Twitter } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function Intro() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Section for large screens */}
      <div className="flex-1 hidden lg:flex items-center justify-center bg-cover bg-center">
        <div className="text-center px-8">
          <h1 className="text-6xl font-bold mb-4">Join the conversation</h1>
          <p className="text-xl max-w-lg mx-auto">
            See what’s happening in the world right now. Be part of the buzz
            with real-time updates.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
        <div className="flex flex-col items-center lg:items-start">
          <Twitter className="w-12 h-12 text-blue-400 mb-8" />
          <h1 className="text-5xl font-bold mb-8">Happening now</h1>
          <h2 className="text-3xl font-bold mb-8">Join Twitter today.</h2>
          <div className="space-y-4 max-w-xs w-full">
            {/* Sign In Button */}
            <button className="w-full bg-blue-400 text-black font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition duration-200"></button>
            <SignInButton>Get Started</SignInButton>
            {/* Login Link */}

            <a className="block text-center w-full border border-gray-300 text-gray-300 font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-200">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
