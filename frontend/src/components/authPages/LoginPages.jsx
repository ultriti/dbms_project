import React, { useState } from "react";
import "./Login_page.css"
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";


const LoginPage = () => {
  const nav = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState("")

  const login_handle = async (e) => {
    e.preventDefault()
    const login_data = {
      email,
      password
    }

    const send_login_data_axios = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/login`, login_data, { withCredentials: true })
    if (send_login_data_axios.status == 200) {
      alert(send_login_data_axios.data.message)
      nav("/")
    }
    else {
      alert("login failed")
      nav("/user/login")
    }

  }




  return (
    <div className="login_page_frame   min-h-screen flex items-center justify-center bg-gray-100 p-[5vw]">

      <div className="login_page_cont h-[80vh] w-full flex flex-row items-center justify-center rounded-4xl overflow-hidden ">


        {/* Right Side - Image & Text */}
        <div className="w-1/2 h-[80vh] bg-purple-700  flex items-center justify-center">
          <div className="h-full w-full">
            <img className='h-[100%] w-[100%] object-cover' src="https://th.bing.com/th/id/OIP.DkSPKWnxJUgzt1Qti93erQHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          </div>
        </div>

        <div className="login_page_form p-8 rounded shadow-md h-[80vh] w-1/2 ">

          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={login_handle}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
