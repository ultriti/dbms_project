import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-white text-xl font-bold">MyWebsite</div>
        
        {/* Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="/user/register" className="text-white hover:text-gray-300">sign up</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
