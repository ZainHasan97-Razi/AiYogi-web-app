import React from "react";
import backgroundImage from "../../assets/images/homebackground.png"; // Import the image
import Navbar from "./components/navbar";
import ScrollingAvatars from "./components/scrollingAvatars";
import Feature from "./components/Feature";
import Advantages from "./components/Advantages";

import { useQuery } from "@tanstack/react-query";
import { moduleTending } from "./home.api";

const Home = () => {

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['moduleTending'],
    queryFn: moduleTending,
  })

  return (
    <div className="bg-themeblack">
      {/* {data.data} */}
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          {/* <h1 className="text-white text-4xl font-bold">Welcome to My App</h1> */}
        </div>
        {/* <ScrollingAvatars /> */}
      </div>

      {/* Other Components */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">More Content</h2>
        <p className="text-gray-700">
          This content is outside the background image and will scroll normally.
        </p>

        <Feature/>
        <Advantages/>
        {/* Add more components here */}
      </div>
    </div>
  );
};

export default Home;
