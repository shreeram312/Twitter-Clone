"use client";
const SidebarTweetButton = () => {
  return (
    <div>
      <button
        style={{ backgroundColor: "rgb(29 155 240)" }}
        className="p-3 -mx-2 text-sm rounded-full w-full md:w-32 "
      >
        <span className="-mx-2">Tweet</span>
      </button>
    </div>
  );
};

export default SidebarTweetButton;
