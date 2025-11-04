import React, { useState } from 'react';

const PostCard = ({ id, userId, title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-4 flex-grow">
        <h3 className="text-gray-800 font-semibold text-sm leading-tight mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
          {body}
        </p>
      </div>
      
      <div className="mt-auto">
        <button
          onClick={handleClick}
          className={`
            w-full py-2.5 px-4 rounded text-xs font-medium
            transition-colors duration-200
            ${isClicked
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-gray-700 hover:bg-gray-800 text-white'}
          `}
        >
          {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;