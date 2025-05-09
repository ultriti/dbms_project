import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../common pages/Sidebar';
import Navbar from '../common pages/Navbar_frame';
import  {useNavigate} from "react-router-dom"

const CreatePostPage = () => {

  const nav = useNavigate()
  const [imageFile, setImageFile] = useState(null); // For storing the selected file
  const [uploading, setUploading] = useState(false); // For upload status
  const [uploadedImageUrl, setUploadedImageUrl] = useState(''); // To store the uploaded image URL
  const [content, setContent] = useState(''); // For post content

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!imageFile) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'upload_file_demo_1'); // Replace with your upload preset name
    formData.append('cloud_name', 'dqifawygq'); // Replace with your Cloudinary cloud name

    setUploading(true);

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dqifawygq/image/upload', // Replace with your Cloudinary API endpoint
        formData
      );
      setUploadedImageUrl(response.data.secure_url);
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading the image:', error);
      alert('Failed to upload the image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    if (!uploadedImageUrl || !content) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    const postData = {
      content,
      image_url: uploadedImageUrl,
    };

    const axios_post_uplaods = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/posts/creatPost`,postData,{withCredentials:true})
    .then((response) => {
      console.log(response);
      console.log("post created");
    })
    .catch((error) => {
      console.log(error);
      console.log("error in post creation");
    });


    // Logic to handle post creation (e.g., sending data to the server)
    console.log('Post created:', postData);
    alert('Post created successfully!');
    nav("/")
  };

  return (
    <div className="create_post_frame min-h-[100vh] flex flex-col bg-gray-800 ">
      <div className="navbar_frame">
        <Navbar />
      </div>

      <div className="create_post_cont flex flex-row items-center justify-center min-h-[70vh] w-full mt-5 p-5">
        {/* Sidebar */}
        <div className="side_bar_frame flex flex-col fixed top-15 left-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="min-h-[80vh] w-[100%] ml-[6vw] mt-15 p-6 bg-gray-400 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Create a New Post</h2>

          {/* Content Field */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-600 mb-1">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload Field */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 mb-1">Select Image</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full object-contain px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Upload Button */}
          <div className="mb-4">
            <button
              type="button"
              onClick={handleUpload}
              className={`w-full ${uploading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-lg`}
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>

          {/* Uploaded Image Preview */}
          {uploadedImageUrl && (
            <div className="mb-4">
              <img src={uploadedImageUrl} alt="Uploaded" className="w-full rounded-lg" />
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
