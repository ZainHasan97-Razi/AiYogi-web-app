import React from 'react';
import logo from '../../../assets/logos/logo.svg';

const Navbar = () => {
  return (
    // <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
    <nav className="bg-transparent w-full z-10 bg-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Adjust height as needed */}
          </div>

          {/* Data type columns */}
          <div className="flex space-x-10">
            <span className="text-white font-light">About</span>
            <span className="text-white font-light">Videos</span>
            <span className="text-white font-light">Subscribe</span>
            <span className="text-white font-light">Work With Us</span>
            <span className="text-white font-light">Public Relations</span>
            <span className="text-white font-light">Blogs</span>
            <span className="text-white font-light">Mantak Chia</span>
          </div>

          {/* Optional: Add a button or other elements */}
          <div>
            <button className="bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200">
              Try AI Yogi
            </button>
            {/* <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200">
              h
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;