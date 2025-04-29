import React, { useState } from 'react';

const EditProfilePage = () => {
  const [description, setDescription] = useState('');
  const [profilePicId, setProfilePicId] = useState('jdjq0nm0vz4ypsqugp2t');
  const [profilePicUrl, setProfilePicUrl] = useState('https://res.cloudinary.com/dqifawygq/image/upload/v1745850833/jdjq0nm0vz4ypsqugp2t.png');
  const [username, setUsername] = useState('');

  const handleSave = () => {
    // Logic to save the updated profile data
    console.log({ description, profilePicId, profilePicUrl, username });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
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
