"use client";
import { BiHomeAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline, IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { CgProfile, CgMoreO } from "react-icons/cg";

export const SidebarMenuItems = [
  { title: "Home", icon: <BiHomeAlt />, href: "home" },
  { title: "Explore", icon: <BsSearch />, href: "explore" },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
    href: "/notifications",
  },
  { title: "Messages", icon: <MdOutlineMailOutline />, href: "messages" },
  { title: "Grok", icon: <RiEditBoxLine />, href: "grok" },
  { title: "Bookmarks", icon: <PiBookmarkSimpleLight />, href: "bookmarks" },
  { title: "Communities", icon: <IoPeopleSharp />, href: "communities" },
  { title: "Profile", icon: <CgProfile />, href: "profile" },
  { title: "More", icon: <CgMoreO />, href: "more" },
];
