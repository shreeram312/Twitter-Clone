import React from "react";

const ReplyBox = () => {
  return (
    <div className="border-t-2  text-white p-2  flex items-start max-w-lg mx-auto">
      {/* User avatar */}
      <img
        src="https://via.placeholder.com/40"
        alt="user avatar"
        className="rounded-full w-10 h-10 mr-3"
      />

      {/* Reply Input Section */}
      <div className="flex-grow p-2">
        {/* Replying to */}
        <p className="text-xs text-gray-400 mb-1">
          Replying to <span className="text-blue-500">@me</span>
        </p>

        {/* Textarea for reply */}
        <input
          type="text"
          placeholder="Post your reply"
          className="w-full bg-transparent text-white outline-none border-b border-gray-700 pb-1 mb-2"
        />

        {/* Icon options below the input */}
        <div className="flex items-center justify-between">
          {/* Icon Buttons */}
          <div className="flex space-x-3 text-blue-500">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26c.83.55 1.92.55 2.75 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 2a1 1 0 00-1 1v12a1 1 0 001.447.894l8.276-4.447A1 1 0 0015 10.618V9.382a1 1 0 00-.553-.894l-8.276-4.447A1 1 0 005 2z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22c6.075 0 11-4.925 11-11S18.075 0 12 0 1 4.925 1 11s4.925 11 11 11zm0-20c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
                <path d="M15.243 11.757a1 1 0 01-1.415 0l-2.829-2.828a1 1 0 111.414-1.415l2.829 2.828a1 1 0 010 1.415z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 11V9a1 1 0 00-2 0v2H4a1 1 0 000 2h3v2a1 1 0 002 0v-2h3a1 1 0 000-2H9z"
                />
              </svg>
            </button>
          </div>

          <button className="bg-blue-600 text-white py-1 px-4 rounded-full">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyBox;
