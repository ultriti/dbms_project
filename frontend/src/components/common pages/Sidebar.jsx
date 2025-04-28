import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar_frame h-full w-full bg-gray-900 flex flex-col items-center p-4 text-white">
      <ul className="space-y-6">
        {/* Home */}
        <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/">
            <img src="/path/to/home-icon.png" alt="Home" className="w-12 h-12" />
          </a>
        </li>

        {/* User Posts
        <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/posts">
            <img src="/path/to/posts-icon.png" alt="User Posts" className="w-12 h-12" />
          </a>
        </li> */}

        {/* Create Post */}
        <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/create-post">
            <img src="/path/to/create-post-icon.png" alt="Create Post" className="w-12 h-12" />
          </a>
        </li>

        {/* User Profile */}
        <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/user/profile">
            <img src="/path/to/profile-icon.png" alt="User Profile" className="w-12 h-12" />
          </a>
        </li>

        {/* Logout */}
        <li className="flex flex-col items-center bg-amber-300 rounded-[50%]">
          <a href="/logout">
            <img src="/path/to/logout-icon.png" alt="Logout" className="w-12 h-12" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
