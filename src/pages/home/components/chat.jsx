import React from "react";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const { state } = useLocation();

  console.log(state, 'ssss');

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <img src={state.bannerImageUrl} alt="Hero Journey" className="mx-auto w-20 h-20 mb-4" />
        <h1 className="text-2xl font-semibold mb-6">{state?.name}</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border border-yellow-500 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="border border-yellow-500 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="border border-yellow-500 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="border border-yellow-500 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="border border-yellow-500 p-4 rounded-lg col-span-2">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        
        <div className="flex items-center border border-yellow-500 p-3 rounded-lg max-w-lg mx-auto mb-4">
          <input 
            type="text" 
            placeholder="Enter questions" 
            className="bg-transparent w-full outline-none text-white" 
          />
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
          Submit →
        </button>
      </div>
    </div>
  );
};

export default Chat;