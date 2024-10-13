import { redirect } from "next/navigation";
import React from "react";
import Intro from "./Intro/page";

import { auth } from "@clerk/nextjs/server";

const page = () => {
  const { userId } = auth();
  if (!userId) return <Intro />;
  redirect("/home");
};

export default page;
