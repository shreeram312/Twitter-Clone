import React from "react";

const CommentCard = () => {
  return (
    <div>
      <div className="border-b border-gray-600 pb-4 mb-4">
        <div className="flex items-center mb-2">
          <div className="mr-3">
            <img
              src="https://via.placeholder.com/40"
              alt="username"
              className="rounded-full w-10 h-10"
            />
          </div>
          <div>
            <p className="text-sm font-bold">Dummy User</p>
            <p className="text-xs text-gray-400">@dummyuser</p>
          </div>
        </div>
        <p className="mb-2">This is a dummy comment for display purposes.</p>
        <p className="text-xs text-gray-500">16 October at 11:05 pm</p>

        {/* Render replies */}
        <div className="mt-4">
          {/* replies are here bro */}
          {/* <ReplyCard />
          <ReplyCard /> */}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
