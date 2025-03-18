import React from "react";
import backgroundImage from "../../assets/images/homebackground.png"; // Import the image
import Navbar from "./components/navbar";
import ScrollingAvatars from "./components/scrollingAvatars";
import Feature from "./components/Feature";
import Advantages from "./components/Advantages";
import BeginnerPath from "./components/BeginnerPath";

import { useQuery } from "@tanstack/react-query";
import { moduleTending, moduleFeatured } from "./home.api";

const Home = () => {

  const { isPending, isError, data: trendingData, error } = useQuery({
    queryKey: ['moduleTending'],
    queryFn: moduleTending,
  })

  const { data: moduleFeaturedData } = useQuery({
    queryKey: ['moduleFeatured'],
    queryFn: moduleFeatured,
  })

  // console.log(moduleFeaturedData?.data);

  return (
    <div className="bg-themeblack">
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <ScrollingAvatars data={trendingData?.data?.modules || []} />
      </div>

      {/* Other Components */}
      <div className="p-8">
        <Feature />
        <Advantages />
        <BeginnerPath data={moduleFeaturedData?.data?.modules || []}/>
        {/* Add more components here */}
      </div>
    </div>
  );
};

export default Home;
