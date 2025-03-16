import React from 'react';
import backgroundImage from '../../assets/images/homebackground.png'; // Import the image

const Home = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Welcome to My App</h1>
        </div>
      </div>

      {/* Other Components */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">More Content</h2>
        <p className="text-gray-700">
          This content is outside the background image and will scroll normally.
        </p>
        {/* Add more components here */}
      </div>
    </div>
  );
};

export default Home;