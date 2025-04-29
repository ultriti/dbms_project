import React from 'react'
import { useNavigate } from 'react-router-dom';
function LogoutPages() {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    // Redirect to login page
    navigate('/user/login');
  };

  const handleCancel = () => {
    // Navigate back to home or dashboard
    navigate('/');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
      <h2 className="text-2xl font-bold mb-4">Log Out</h2>
      <p className="text-gray-700 mb-6">Are you sure you want to log out?</p>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
        >
          Cancel
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
  )
}

export default LogoutPages;
