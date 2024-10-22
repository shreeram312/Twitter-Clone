import { GetAllUsers } from "@/actions/action";
import React, { useEffect, useState } from "react";

const FollowBar = ({ UserData }: any) => {
  console.log(UserData);
  const [allusers, setallusers] = useState<any>([]);

  useEffect(() => {
    const fetchuser = async () => {
      const res = await GetAllUsers();
      console.log(res);

      const filtereduser = res.filter((data: any) => {
        return data.userName != UserData.userName;
      });
      setallusers(filtereduser);
    };
    fetchuser();
  }, [UserData]);
  console.log(allusers);
  return (
    <div className="flex flex-col gap-10 ">
      <div className=" w-80 my-6 outline outline-offset- outline-1 outline-gray-600 rounded-lg  ">
        <div className="bg-black text-white p-4  ">
          <div className="   ">
            <p className="text-semibold mx-2">Whom to Follow</p>
            {allusers.map((user: any, index: number) => (
              <div
                key={index}
                className=" my-2 flex items-center justify-between bg-gray-900 p-2 rounded-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={user.profileImage}
                    alt={`${user.userName}'s Profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <span className="text-white font-medium">
                    {user.userName}
                  </span>
                </div>

                <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-400 transition duration-300">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black w-80 p-4 rounded-lg outline outline-offset-1 outline-1 outline-gray-600   ">
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

export default FollowBar;
