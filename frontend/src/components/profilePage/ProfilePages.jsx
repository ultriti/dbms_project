import React, { useEffect, useState } from 'react';
import Navbar from '../common pages/Navbar_frame';
import Sidebar from '../common pages/Sidebar';
import axios from 'axios';

const ProfilePage = () => {
  const [userDetails, setuserDetails] = useState({})
  const [userAuthor, setuserAuthor] = useState(true)

  const getUserProfilefun = async () => {
    const getuserdataAxios = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/getUser`, { withCredentials: true })

    console.log(getuserdataAxios.status);

    if (getuserdataAxios.status == 200) {
      console.log(getuserdataAxios.data.user);
      setuserDetails(getuserdataAxios.data.user)


    } else {
      alert(getuserdataAxios.data.message)
    }

  }

  useEffect(() => {

    getUserProfilefun()

  }, [])



  return (
    <div className="profile_page_frame h-[100vh] w-[100vw] ">

      <div className="navbar_frame">
        <Navbar />
      </div>




      <div className=" h-[20vh] w-[100%] mt-[4vw] flex flex-row">

        {/* side bar frame */}
        <div className="side_bar_frame flex flex-col">
          <Sidebar />
        </div>

        <div className="profile_page_main_cont min-h-[100vh] w-full ml-[5vw] flex flex-col p-[2vw]">




          {/* Profile Header */}
          <div className="flex items-center space-x-6 min-h-[20vh] w-full bg-white p-4 rounded-lg shadow-md">
            <img
              src={userDetails.profile_pic_url}
              alt="Profile Avatar"
              className="rounded-full w-24 h-24"
            />
            <div>
              <h2 className="text-2xl font-bold">{userDetails.username}</h2>
              <p className="text-gray-500">
                {
                  userDetails.description ? (
                    userDetails.description
                  ) : (<></>)

                }
              </p>
              {
                userAuthor ? (
                  <a href="/user/editProfile">
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">edit</button>
                  </a>

                ) : (
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
                )
              }
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-4 flex justify-evenly bg-white p-4 rounded-lg shadow-md">
            <div className="text-center">
              <p className="font-bold text-lg">215</p>
              <p className="text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">80.4k</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">89</p>
              <p className="text-gray-500">Following</p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mt-4 flex justify-evenly bg-white p-4 rounded-lg shadow-md">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                <p>Local</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                <p>Gallery</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                <p>Preserve</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                <p>Gear</p>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img src="demo" alt="Post 1" className="w-full h-32 object-cover rounded-md" />
            <img src="demo" alt="Post 2" className="w-full h-32 object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
