import React from 'react';
import home from "../../../public/images/home_.svg"
import profile from "../../../public/images/profile_img.svg"
import add from "../../../public/images/add_post.svg"
import logout from "../../../public/images/logout.svg"

const Sidebar = () => {
  return (
    <div className="sidebar_frame h-full w-full bg-blue-900 flex flex-col items-center p-4 text-white">
      <ul className="space-y-4">
        {/* Home */}
        {/* <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/">
            <img src={home} alt="Home" className="w-12 h-12" />
          </a>
        </li> */}

        {/* User Posts
        <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/posts">
            <img src="/path/to/posts-icon.png" alt="User Posts" className="w-12 h-12" />
          </a>
        </li> */}

        {/* home page */}
        <li className="flex h-12 w-12 flex-col justify-center items-center bg-gray-200 rounded-[50%] p-2">
          <a href="/">
            <img src={home} alt="Create Post" className="w-12 h-12" />
          </a>
        </li>

        {/* Create Post */}
        <li className="flex h-12 w-12 flex-col justify-center items-center bg-gray-200 rounded-[50%] p-2">
          <a href="/posts/creatPost">
            <img src={add} alt="Create Post" className="w-12 h-12" />
          </a>
        </li>

        {/* User Profile */}
        <li className="flex flex-col h-12 w-12 justify-center items-center bg-gray-200 p-1 rounded-[50%]">
          <a href="/user/profile">
            <img src={profile} alt="User Profile" className="w-12 h-12" />
          </a>
        </li>

        {/* Logout */}
        <li className="flex flex-col h-12 w-12 justify-center items-center bg-gray-200 p-1 rounded-[50%]">
          <a href="/user/logout">
            <img src={logout} alt={logout} className="w-12 h-12" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
