import React from "react";

interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  title,
  icon,
  href,
  onClick,
}) => {
  return (
    <div>
      <div
        key={title}
        className="hover:bg-gray-800 w-fit px-1 hover:rounded-full hover:cursor-pointer"
      >
        <li className="flex justify-start items-center gap-4 my-4 py-1">
          <span className="text-2xl">{icon}</span>

          {/* Hide text on small screens */}
          <span className="hidden md:block text-xl font-bold">{title}</span>
        </li>
      </div>
    </div>
  );
};

export default SideBarItem;
