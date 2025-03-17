import React from "react";
import feature2 from '../../../assets/images/feature-35935.png'
import feature3 from '../../../assets/images/feature-35937.png'

const Advantages = () => {
  return (
    <div className="text-white p-10">
      <div className="max-w-6xl mx-auto">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2">
            <h3 className="text-red-500 uppercase">Advantages</h3>
            <h2 className="text-3xl font-bold">Customize According To You</h2>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="bg-gray-800 p-3 rounded-lg">Google Play</button>
              <button className="bg-gray-800 p-3 rounded-lg">App Store</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={feature2}
              alt="Mobile Preview"
              className="w-64 rounded-lg"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <h3 className="text-red-500 uppercase">Advantages</h3>
            <h2 className="text-3xl font-bold">Join Module</h2>
            <p className="mt-4 text-gray-400">
              All content in one place. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={feature3}
              alt="Mobile Preview"
              className="w-64 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg">Try AI Yogi</button>
      </div>
    </div>
  );
};

export default Advantages;
