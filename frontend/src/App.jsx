import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from './components/Homepage/HomePages'
import LoginPages from './components/authPages/LoginPages'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />

        {/* Login pages */}
        <Route path="/user/login" element={<LoginPages />} />
        <Route path="/user/logout" element={<LoginPages />} />
        {/* Register pages */}
      </Routes>
    </Router>

   </>
  )
}

export default App
