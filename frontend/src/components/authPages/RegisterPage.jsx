// RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom';
import "./Register_page.css"

const RegisterPage = () => {
    const nav = useNavigate()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit =async (e)=>{
        e.preventDefault()
        console.log('data');
        const register_data={
            username : name,
            email:email,
            password:password
        }
        
        const send_register_data = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/register`,register_data , {withCredentials:true})
        console.log('',send_register_data.status);
        
        if(send_register_data.status===200){
            alert("Register Success")
            nav("/")
        }else{
            alert("Register Failed")
            nav("/user/register")

        }


    }


    return (
        <div className="register_form_frame flex min-h-screen p-[5vw]">

            <div className="register_pge_cont rounded-4xl overflow-hidden h-[80vh] w-full flex flex-row ">


                {/* Left Side - Form */}
                <div className="register_form_form w-1/2  p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={name}
                                onChange={(e)=>{setname(e.target.value)}}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                                email
                            </label>
                            <input
                                id="password"
                                type="email"
                                placeholder="Enter your password"
                                value={email}
                                onChange={(e)=>{setemail(e.target.value)}}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        {/* Confirm Password Input */}
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm your password"
                                value={password}
                                onChange={(e)=>{setpassword(e.target.value)}}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-gray-600 text-sm mt-4">
                        Already have an account? <a href="/user/login" className="text-purple-500 hover:underline">Login</a>
                    </p>
                </div>

                {/* Right Side - Image & Text */}
                <div className="w-1/2 bg-purple-700 text-white flex items-center justify-center">
                    <div className="h-full w-full">
                        <img className='h-[100%] w-[100%] object-cover' src="https://th.bing.com/th/id/OIP.DkSPKWnxJUgzt1Qti93erQHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
