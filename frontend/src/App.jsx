import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from './components/Homepage/HomePages'
import LoginPages from './components/authPages/LoginPages'
import LogoutPages from './components/authPages/LogoutPages'
import RegisterPage from './components/authPages/RegisterPage'
import ProfilePage from './components/profilePage/ProfilePages'
import EditProfilePage from './components/profilePage/EditProfilePage'
import CreatePostPage from './components/Posts/CreatePostPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Router>
      <Routes>
        {/* user pages */}
        <Route path="/" element={<HomePages />} />
        <Route path="/user/profile" element={<ProfilePage />} />

        {/* modify */}
        <Route path="/user/editProfile" element={<EditProfilePage />} />

        {/* posts */}
        <Route path="/posts/creatPost" element={<CreatePostPage />} />


        {/* Login pages */}
        <Route path="/user/login" element={<LoginPages />} />
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/user/logout" element={<LogoutPages />} />
        {/* Register pages */}
      </Routes>
    </Router>

   </>
  )
}

export default App
