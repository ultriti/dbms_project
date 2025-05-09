import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext, { userDataContext } from '../contexts/userContext';
import axios from 'axios';

const EditProfilePage = () => {
  const mav = useNavigate()
  const { toggleEditFrame, toggleEditFrameFun } = useContext(userDataContext);




  const [description, setDescription] = useState('');
  const [profilePicId, setProfilePicId] = useState('jdjq0nm0vz4ypsqugp2t');
  const [profilePicUrl, setProfilePicUrl] = useState('https://res.cloudinary.com/dqifawygq/image/upload/v1745850833/jdjq0nm0vz4ypsqugp2t.png');
  const [username, setUsername] = useState('');

  const handleSave = async () => {
    // Logic to save the updated profile data
    console.log({ description, profilePicId, profilePicUrl, username });
    const send_editData = {
      description, profilePicId, profilePicUrl, username
    }
    const editUserDataAxios = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/user/getUser`, send_editData, { withCredentials: true })

    if(editUserDataAxios.status == 200){
      alert(editUserDataAxios.data.message)
      toggleEditFrameFun()
      window.location.reload()
    }else{
      alert(editUserDataAxios.data.message)
    }


  };

  return (
    <div className="h-[60vh] w-[50vw] mt-10 p-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg">
      <div className="exit_frame h-[4vh] w-full bg-black flex justify-right">
          <button onClick={()=>{toggleEditFrameFun()}} className='bg-red-600 p-1 px-2'>X</button>
      </div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Edit Profile</h2>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600 mb-1">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>



      {/* Profile Picture URL */}
      <div className="mb-4">
        <label htmlFor="profilePicUrl" className="block text-gray-600 mb-1">Profile Picture URL</label>
        <input
          id="profilePicUrl"
          type="text"
          value={profilePicUrl}
          onChange={(e) => setProfilePicUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          disabled
        />
      </div>

      {/* Username */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfilePage;
