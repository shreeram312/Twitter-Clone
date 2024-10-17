import Image from "next/image";
import React from "react";

const PostMoreInfo = ({ postdata }: any) => {
  return (
    <div className="max-w-lg mx-auto p-4 border-b border-gray-700 text-white">
      <div className="flex items-start justify-between">
        <div className="flex space-x-2">
          <Image
            src={postdata?.user?.profileImage}
            height={50}
            width={50}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">
              Rishabh Singh <span className="text-blue-500">✔</span>
            </p>
            <p className="text-sm text-gray-400">@merishabh_singh</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">11:08 AM · Oct 16, 2024</p>
      </div>

      {/* Tweet Content */}
      <div className="mt-2">
        <p>
          <span className="text-blue-400">#hiring</span> for SDE-Intern role
        </p>
        <p className="mt-2">
          <span className="text-blue-400">Mode: </span>#remote
        </p>
        <p>Stipend: 40K-45K/Month</p>
        <p>Duration: 6 Month</p>

        <p className="text-blue-400 mt-2">
          Apply here: engineerhub.in/company/intern...
        </p>
        <p className="text-blue-400 mt-2">
          #careers #jobs #internship #sde #bangalore #hyderabad
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-gray-500 text-sm mt-3">
        <p>15.8K Views</p>
        <div className="flex space-x-4">
          <span>4 Comments</span>
          <span>40 Retweets</span>
          <span>234 Likes</span>
        </div>
      </div>

      {/* Reply Section */}
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <input
            type="text"
            placeholder="Tweet your reply"
            className="w-full p-2 bg-gray-800 text-gray-400 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Reply
          </button>
        </div>

        {/* Replies */}
        <div className="mt-4 space-y-4">
          {/* First Reply */}
          <div className="flex items-start space-x-2">
            <img
              src="https://via.placeholder.com/50"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-800 p-2 rounded-md w-full">
              <p className="text-sm">
                <span className="font-bold">Ravi Kumar Thakur</span>{" "}
                <span className="text-gray-400">@ravithakur_7</span>
              </p>
              <p>Why are you posting a job opening which has been closed?</p>

              {/* Like and Comment Buttons */}
              <div className="flex space-x-4 text-gray-500 text-sm mt-2">
                <button className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v8a2 2 0 002 2h2M7 8v4m0 0l5 5m-5-5h8m0-4V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3m8 0l5-5"
                    ></path>
                  </svg>
                  <span>593 Likes</span>
                </button>
              </div>

              {/* Nested Reply */}
              <div className="ml-6 mt-2 space-y-2">
                <div className="flex items-start space-x-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User Profile"
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="bg-gray-900 p-2 rounded-md w-full">
                    <p className="text-sm">
                      <span className="font-bold">Rishabh Singh</span>{" "}
                      <span className="text-gray-400">@merishabh_singh</span>
                    </p>
                    <p>
                      It's still taking response, as they didn't find good
                      candidates as of now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of First Reply */}
        </div>
      </div>
    </div>
  );
};

export default PostMoreInfo;
