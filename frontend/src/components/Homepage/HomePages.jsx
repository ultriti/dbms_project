import React from 'react'
import Navbar from '../common pages/Navbar_frame'
import Sidebar from '../common pages/Sidebar'


const HomePages = () => {



  return (
    <div className='home_page_frame min-h-[100vh] w-full bg-gray-700 flex flex-row'>

      <div className="navbar_frame">
          <Navbar/>
      </div>

      <div className="homepage_cont min-h-[100vh] w-[100%] bg-red-300 flex flex-cols mt-[4vw]">

        {/* side bar frame */}
        <div className="side_bar_frame flex flex-col">
            <Sidebar/>
        </div>

        {/* home page frame */}
        <div className="homepage_mainframe min-h-[100vh] w-[100%] bg-pink-400 flex flex-row ml-[5vw]">

            <div className="posts_frame min-h-[150vh] w-2/3 bg-amber-500 flex flex-col items-center justify-center p-[2vw]">

                {/* posts frame */}
                <div className="posts_frame_inner h-[80vh] w-[60%] mb-[1vw] bg-yellow-400">

                </div>
                <div className="posts_frame_inner h-[80vh] w-[60%] mb-[1vw] bg-yellow-400">

                </div>
                <div className="posts_frame_inner h-[80vh] w-[60%] bg-yellow-400 mb-[1vw]">

                </div>

            </div>

            {/* -----------------> suggested user frame  <--------------------- */}
            <div className="user_suggestion_frame h-[70vh] w-1/3 right-0 top-0 bg-indigo-600 fixed mt-[4vw]">

                <div className="user_suggest_cont h-full w-full">


                </div>


            </div>

        </div>


      </div>

    </div>
  )
}

export default HomePages
