"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>([]);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>({});
  const [followStatus, setFollowStatus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [postmore, setPostMore] = useState<any>([]);
  const [userinfo, setuserinfo] = useState<any>({});
  const [loadingmain, setLoadingmain] = useState<boolean>(false);
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (postId, isLiked) => {
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: {
        ...prevLikedPosts[postId],
        isLiked: !isLiked,
        likeCount: prevLikedPosts[postId]
          ? isLiked
            ? prevLikedPosts[postId].likeCount - 1
            : prevLikedPosts[postId].likeCount + 1
          : 1, // Set to 1 if previously undefined
      },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        allUsers,
        setAllUsers,
        userData,
        setUserData,
        followStatus,
        setFollowStatus,
        postmore,
        setPostMore,
        userinfo,
        setuserinfo,
        loadingmain,
        setLoadingmain,
        likedPosts,
        toggleLike,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
