import React, { useState } from "react";
import backgroundImage from "../../assets/images/homebackground.png"; // Import the image
import Navbar from "./components/navbar";
import ScrollingAvatars from "./components/scrollingAvatars";
import Feature from "./components/Feature";
import Advantages from "./components/Advantages";
import NoteVideo from "./components/noteVideo";
import BeginnerPath from "./components/BeginnerPath";

import { useQuery } from "@tanstack/react-query";
import { moduleTending, moduleFeatured } from "./home.api";
import DetailModal from "./components/detailmodal";

const Home = () => {

  const [onSelected, setOnSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const { isPending, isError, data: trendingData, error } = useQuery({
    queryKey: ['moduleTending'],
    queryFn: moduleTending,
  })

  const { data: moduleFeaturedData } = useQuery({
    queryKey: ['moduleFeatured'],
    queryFn: moduleFeatured,
  })

  const onClickItem = (item) => {
    setOpenModal(true);
    setOnSelected(item);
    // console.log(item, 'selected items');
  }

  // console.log(moduleFeaturedData?.data);

  return (
    <div className="bg-themeblack">
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative mb-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <ScrollingAvatars data={trendingData?.data?.modules || []} callback={onClickItem} />
        <DetailModal isOpen={openModal} onClose={setOpenModal} data={onSelected}/>
      </div>

      {/* Other Components */}
      <div className="text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <Feature />
          <Advantages />
          <NoteVideo />
          <BeginnerPath data={moduleFeaturedData?.data?.modules || []} callback={onClickItem}/>
        </div>
      </div>

      <div className="p-8 pt-20">
        {/* Add more components here */}
      </div>

    </div>
  );
};

export default Home;
