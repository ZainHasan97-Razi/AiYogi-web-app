import React from "react";
import backgroundImage from "../../assets/images/homebackground.png"; // Import the image
import Navbar from "./components/navbar";
import ScrollingAvatars from "./components/scrollingAvatars";
import Feature from "./components/Feature";
import Advantages from "./components/Advantages";
import BeginnerPath from "./components/BeginnerPath";

import { useQuery } from "@tanstack/react-query";
import { moduleTending } from "./home.api";

const Home = () => {

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['moduleTending'],
    queryFn: moduleTending,
  })

  return (
    <div className="bg-themeblack">
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <ScrollingAvatars />
      </div>

      {/* Other Components */}
      <div className="p-8">
        <Feature />
        <Advantages />
        <BeginnerPath/>
        {/* Add more components here */}
      </div>
    </div>
  );
};

export default Home;
