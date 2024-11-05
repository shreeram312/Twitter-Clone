"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>([]);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>({});
  const [followStatus, setFollowStatus] = useState<{ [key: string]: boolean }>(
    {}
  );
  return (
    <AppContext.Provider
      value={{
        allUsers,
        setAllUsers,
        userData,
        setUserData,
        followStatus,
        setFollowStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
