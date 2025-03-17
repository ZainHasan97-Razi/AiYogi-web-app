import React from "react";
import backgroundImage from "../../assets/images/homebackground.png"; // Import the image
import Navbar from "./components/navbar";
import ScrollingAvatars from "./components/scrollingAvatars";
import Feature from "./components/Feature";
import Advantages from "./components/Advantages";

const Home = () => {
  return (
    <div className="bg-themeblack">
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          {/* <h1 className="text-white text-4xl font-bold">Welcome to My App</h1> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-x-auto">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-themeblack to-transparent pointer-events-none"></div>

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-themeblack to-transparent pointer-events-none"></div>
          <ScrollingAvatars />
        </div>
      </div>

      {/* Other Components */}
      <div className="p-8">
        {/* <h2 className="text-2xl font-bold mb-4">More Content</h2>
        <p className="text-gray-700">
          This content is outside the background image and will scroll normally.
        </p> */}

        <Feature />
        <Advantages />
        {/* Add more components here */}
      </div>
    </div>
  );
};

export default Home;
