import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DetailModal = ({isOpen, onClose, data}) => {
  const navigate = useNavigate();
  if(!isOpen) return null;

  // to={{ pathname: , state: { data } }}


  return (
    <div className="head-slide-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal */}
      {/* {isModalOpen && ( */}
      <div className="fixed inset-0 flex items-center justify-center">
        <button className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600" onClick={()=>onClose(false)}>✕</button>
        <div className="head-slide-modal-body bg-gray-800 p-6 rounded-lg text-center w-4/5 h-4/5 transform transition-transform duration-300 ease-out translate-y-10 opacity-0 animate-slide-up relative flex flex-col overflow-y-auto">
          <img src={data.bannerImageUrl} alt="Modal Image" className="h-screen bg-cover bg-center relative" />
          <h2 className="text-xl font-semibold mb-4">{data.name}</h2>
          <p className="mb-4 px-4">{data.description}</p>
          <button onClick={()=> navigate(`/chat/${data.id}`, {state: data})} className="bg-yellow-500 px-6 py-2 rounded-lg text-black hover:bg-yellow-600" >Go to profile</button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;