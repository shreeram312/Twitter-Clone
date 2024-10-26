import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = () => {
  const { userId } = auth();
  if (userId) {
    redirect("/home");
  } else {
    redirect("/Intro");
  }
};

export default page;
