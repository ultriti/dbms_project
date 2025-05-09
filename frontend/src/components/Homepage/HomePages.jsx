import React, { useEffect, useState } from 'react'
import Navbar from '../common pages/Navbar_frame'
import Sidebar from '../common pages/Sidebar'
import axios from 'axios'
import Post_temp from './Post_temp'


const HomePages = () => {
  
  const [posts, setposts] = useState([])

  const fetchAllPosts =async ()=>{

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/posts/getAllPosts`,{withCredentials:true})
    if(response.status===200){
      // alert(response.data.message)
      console.log("\n\n",response.data.posts);
      
      setposts(response.data.posts)
    }else{
      alert(response.data.message)
    }

  }

  const fetchSuggestedUser = ()=>{
    
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])
  



  return (
    <div className='home_page_frame min-h-[100vh] w-full bg-gray-700 flex flex-row'>

      <div className="navbar_frame">
          <Navbar/>
      </div>

      <div className="homepage_cont min-h-[100vh] w-[100%]  flex flex-cols mt-[4vw]">

        {/* side bar frame */}
        <div className="side_bar_frame flex flex-col">
            <Sidebar/>
        </div>

        {/* home page frame */}
        <div className="homepage_mainframe min-h-[100vh] w-[100%] bg-gray-900 flex flex-row ml-[5vw]">

            <div className="posts_frame min-h-[150vh] w-2/3  flex flex-col items-center justify-center p-[2vw]">

                {/* posts frame */}
                {
                  posts.map((post)=>{
                        return(
                            <div className="posts_frame_inner rounded-[2vw] overflow-hidden min-h-[40vh] w-[60%] mb-[1vw] bg-yellow-400">
                                <Post_temp username={post.username} user_profile_pic={post.profile_pic_url} post_img={post.image_url} posts_desc={post.content} />
                            </div>
                        )
                    })
                }
          
                

            </div>

            {/* -----------------> suggested user frame  <--------------------- */}
            <div className="user_suggestion_frame h-[70vh] w-1/3 right-0 top-0 fixed mt-[4vw]">

                <div className="user_suggest_cont h-full w-full">


                </div>


            </div>

        </div>


      </div>

    </div>
  )
}

export default HomePages
