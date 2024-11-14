"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>([]);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>({});
  const [followStatus, setFollowStatus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const { getToken } = useAuth();

  const [postmore, setPostMore] = useState<any>([]);
  const [userinfo, setuserinfo] = useState<any>({});
  const [loadingmain, setLoadingmain] = useState<boolean>(false);

  const [currentuser, setcurrentuser] = useState<any[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      const token = await getToken();
      const res = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setcurrentuser(res.data);
    };
    fetchdata();
  }, []);

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
        currentuser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
