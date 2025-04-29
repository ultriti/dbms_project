import React, { useState } from 'react';

const Post_temp = (props) => {


  
  return (
    <div className="h-full w-full p-2 bg-gray-800 shadow-md  rounded[2vw] overflow-hidden">
      {/* Header with username */}
      <div className="flex items-center px-4 py-3 ">
        <img
          src={props.user_profile_pic}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="font-bold text-white">{props.username}</p>
        </div>
      </div>

      {/* Post Image */}
      <img
        className="w-full object-cover"
        src={props.post_img} // Replace this URL with your actual post image
        alt="Post"
      />
      <p className="posts_desc text-gray-300">
        {props.posts_desc}
      </p>

      {/* Post Likes and Comments */}
      <div className="p-4">
        <p className="font-semibold text-white">25 likes</p>
        <div className="mt-2">
          <p>
            <span className="font-semibold text-white">jenmanos</span>{' '}
            <span className="text-gray-200">#awesome</span>
          </p>
          <p>
            <span className="font-semibold text-white">layla</span>{' '}
            <span className="text-gray-200">great work !</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post_temp;
