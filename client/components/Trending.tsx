import React from "react";

const Trending = () => {
  return (
    <div>
      <div className="bg-black w-80 p-4 -mx-24 mt-64 rounded-lg outline outline-offset-1 outline-1 outline-gray-600">
        <h2 className="font-bold text-lg mb-4">What's happening</h2>

        <div className="flex space-x-4 mb-4">
          <img
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
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Trending in India</p>
              <p className="font-bold">#Arrest_Richa_Rajput</p>
              <p className="text-sm text-gray-400">4,498 posts</p>
            </div>
            <div className="text-gray-400">•••</div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Entertainment • Trending</p>
              <p className="font-bold">#BishnoiGang</p>
              <p className="text-sm text-gray-400">10.3K posts</p>
            </div>
            <div className="text-gray-400">•••</div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Entertainment • Trending</p>
              <p className="font-bold">#IndVSNZ</p>
              <p className="text-sm text-gray-400">
                Trending with <span className="text-blue-500">#ViratKohli</span>
              </p>
            </div>
            <div className="text-gray-400">•••</div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Sports • Trending</p>
              <p className="font-bold">CLUELESS CAPTAIN ROHIT</p>
              <p className="text-sm text-gray-400">15.1K posts</p>
            </div>
            <div className="text-gray-400">•••</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
