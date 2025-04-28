import React, { useState } from 'react';
import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

function Hp_posts_tem({
  avatarUrl,
  username,
  timestamp,
  images = [],
  likes = 0,
  caption = '',
}) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((idx) => (idx - 1 + total) % total);
  const next = () => setCurrent((idx) => (idx + 1) % total);

  return (
    <article className="max-w-md mx-auto my-4 bg-white border border-gray-200 rounded-2xl shadow">
      {/* Header */}
      <header className="flex items-center p-4">
        <img
          src={avatarUrl}
          alt={`${username} avatar`}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="font-semibold text-gray-900">{username}</div>
          <time className="text-xs text-gray-500">{timestamp}</time>
        </div>
      </header>

      {/* Image Carousel */}
      <div className="relative">
        {images.length > 0 && (
          <img
            src={images[current]}
            alt={`Post image ${current + 1}`}
            className="w-full h-auto object-cover"
          />
        )}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full focus:outline-none"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full focus:outline-none"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
          </>
        )}
      </div>

      {/* Actions & Caption */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-2">
          <button aria-label="Like post" className="focus:outline-none">
            <HeartIcon className="w-6 h-6 text-gray-700 hover:text-red-500" />
          </button>
          <button aria-label="Comment on post" className="focus:outline-none">
            <ChatIcon className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          </button>
          <button aria-label="Share post" className="focus:outline-none transform rotate-45">
            <PaperAirplaneIcon className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          </button>
          <div className="ml-auto">
            <button aria-label="Save post" className="focus:outline-none">
              <BookmarkIcon className="w-6 h-6 text-gray-700 hover:text-blue-500" />
            </button>
          </div>
        </div>

        <div className="font-semibold mb-2">{likes} likes</div>
        <p className="text-gray-800 text-sm">
          <span className="font-semibold mr-1">{username}</span>
          {caption}
        </p>
      </div>
    </article>
  );
}

export default Hp_posts_tem;
