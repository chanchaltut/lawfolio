import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24 flex items-center justify-center px-4">
      <div className="text-center py-24">
        <h1 className="text-white text-[40px] sm:text-[56px] font-bold mb-4">
          Page <span className="text-[#c9a870]">Not Found</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="bg-[#c9a870] hover:bg-[#b89860] text-[#1a1a1a] px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
