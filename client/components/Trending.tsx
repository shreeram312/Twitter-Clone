import { countHashtags } from "@/actions/action";
import { useAppContext } from "@/context";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Trending = () => {
  const { temp, setTemp } = useAppContext();

  useEffect(() => {
    // Function to delay the API call
    const trend = async () => {
      // Simulate a delay (e.g., 2 seconds)
      setTimeout(async () => {
        const trendPost = await countHashtags();
        console.log(trendPost);
        setTemp(trendPost);
      }, 2000); // Delay of 2 seconds
    };
    trend();
  }, []);

  return (
    <div className="hidden sm:flex">
      <div className="bg-black w-80 p-4 -mx-24 h-fit mt-64 rounded-lg outline outline-offset-1 outline-1 outline-gray-600">
        <h2 className="font-bold text-lg mb-4">What's happening</h2>

        <div className="flex space-x-4 mb-4">
          <Image
            height={200}
            width={200}
            src="https://via.placeholder.com/50"
            alt="Event Image"
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <p className="font-bold">The Offseason</p>
            <p className="text-sm text-gray-400">Event • LIVE</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Render each trending hashtag one by one */}
          {temp.slice(0, 5).map((trend, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-400 text-sm">
                  {index === 0 ? "Trending in India" : "Trending"}
                </p>
                <p className="font-bold">{trend.hashtag}</p>
                <p className="text-sm text-gray-400">{trend.count} posts</p>
              </div>
              <div className="text-gray-400">•••</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
