import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../common pages/Navbar_frame';
import Sidebar from '../common pages/Sidebar';
import axios from 'axios';
import EditProfilePage from './EditProfilePage';
import UserContext, { userDataContext } from '../contexts/userContext';
import "./ProfilePage.css"

const ProfilePage = () => {
  const { toggleEditFrame,toggleEditFrameFun } = useContext(userDataContext);

  const [userDetails, setuserDetails] = useState({})
  const [userAuthor, setuserAuthor] = useState(true)
  const [userPostsDetails, setuserPostsDetails] = useState([])

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

  const getUserPosts = async () => {
    const getuserdataAxios = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/posts/getUserPosts`, { withCredentials: true })

    console.log(getuserdataAxios.status, "user posts", getuserdataAxios.data.userPosts);

    if (getuserdataAxios.status == 200) {
      console.log(getuserdataAxios.data.userPosts);
      setuserPostsDetails(getuserdataAxios.data.userPosts)


    } else {
      alert(getuserdataAxios.data.message)
    }
  }

  useEffect(() => {

    getUserProfilefun()
    getUserPosts()

  }, [])

  // toggle edit fintions
  const toggleEditFramehandle = ()=>{
    console.log('-->',toggleEditFrame);
    
    toggleEditFrameFun()
    console.log('toggle edit frame function called');
    

  }



  return (
    <div className="profile_page_frame min-h-[120vh] w-[100vw] bg-gray-800 ">

      {
        toggleEditFrame?(
          <div className="edit_template_frame fixed h-full w-full  flex items-center justify-center">
          <EditProfilePage/>
  
        </div>
        ):<></>
      }
     

      <div className="navbar_frame">
        <Navbar />
      </div>




      <div className=" h-[20vh] w-[100%] mt-[4vw] flex flex-row">

        {/* side bar frame */}
        <div className="side_bar_frame flex flex-col">
          <Sidebar />
        </div>

        <div className="profile_page_main_cont min-h-[150vh] w-full ml-[5vw] bg-gray-800 flex flex-col p-[2vw]">




          {/* Profile Header */}
          <div className="flex items-center space-x-6 min-h-[20vh] w-full bg-gray-600  p-4 rounded-lg shadow-md">
            <img
              src={userDetails.profile_pic_url}
              alt="Profile Avatar"
              className="rounded-full w-24 h-24"
            />
            <div>
              <h2 className="text-2xl text-white font-bold">{userDetails.username}</h2>
              <p className="text-gray-300">
                {
                  userDetails.description ? (
                    userDetails.description
                  ) : (<></>)

                }
              </p>
              {
                userAuthor ? (
                    <button onClick={()=>{toggleEditFramehandle()}} className="mt-2 cursor-pointer bg-blue-500 text-white px-4 py-1 rounded">edit</button>
                

                ) : (
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
                )
              }
            </div>
          </div>

          {/* Stats Section */}
          <div className="min-h-[10vh] w-full mt-4 flex justify-evenly bg-gray-600  p-4 rounded-lg shadow-md">
            <div className="text-center">
              <p className="font-bold text-lg text-white">0</p>
              <p className="text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg text-white">0</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg text-white">0</p>
              <p className="text-gray-500">Following</p>
            </div>
          </div>



          {/* Posts Grid */}
          <div className="min-h-[90vh] grid grid-cols-3 gap-4 p-20">

            {
              userPostsDetails.map((post, index) => (
                // return (
                <div key={index} className="bg-gray-600 rounded-lg shadow-md p-1 overflow-hidden">
                  <img src={post.image_url} alt="Post Image" className="w-full h-64 object-cover rounded-lg" />
                  
                </div>
                // )
              ))
            }

          </div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
