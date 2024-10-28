import FollowBar from "@/components/FollowBar";
import Trending from "@/components/Trending";
import React from "react";

const Rootlayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <div></div>
    </>
  );
};

export default Rootlayout;
