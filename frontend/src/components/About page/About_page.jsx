import React from "react";
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about_page_ min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-white h-full w-full shadow-md flex justify-between items-center p-4">
        <h1 className="text-lg font-bold text-blue-600">ABOUT PAGE!</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">HOME</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">ABOUT</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">CONTACT</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">STORES</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl text-center h-[80vh] w-[50vw] mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to Our About Page</h2>
        <p className="mt-4 text-gray-600">

        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <input 
            type="text" 
            placeholder="Search something here..." 
            className="border rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
            🔍
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Sign In
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="mt-10">
        <img src="https://via.placeholder.com/150" alt="Succulents" className="rounded-lg shadow-md"/>
      </div>
    </div>
  );
};

export default AboutPage;
