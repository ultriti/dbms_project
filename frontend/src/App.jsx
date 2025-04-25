import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from './components/Homepage/HomePages'
import LoginPages from './components/authPages/LoginPages'
import RegisterPage from './components/authPages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />

        {/* Login pages */}
        <Route path="/user/login" element={<LoginPages />} />
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/user/logout" element={<RegisterPage />} />
      </Routes>
    </Router>

   </>
  )
}

export default App
