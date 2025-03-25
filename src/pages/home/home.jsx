import React, { useState } from "react";
import backgroundImage from "../../assets/images/homebackground.png"; // Import the image
import Navbar from "./components/navbar";
import ScrollingAvatars from "./components/scrollingAvatars";
import Feature from "./components/Feature";
import Advantages from "./components/Advantages";
import NoteVideo from "./components/noteVideo";
import BeginnerPath from "./components/BeginnerPath";

import { useQuery } from "@tanstack/react-query";
import { moduleTending, moduleFeatured, moduleSearch } from "./home.api";
import DetailModal from "./components/detailmodal";
import { SearchComponent } from "./components/Search";

const Home = () => {

  const [onSelected, setOnSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');

  const { isPending, isError, data: trendingData, error } = useQuery({
    queryKey: ['moduleTending'],
    queryFn: moduleTending,
  })

  const {data: searchData, error: searchError, refetch} = useQuery({
    queryKey: ['search', search],
    queryFn: async () => {
      const payload = {
        searchTerm: search
      }
      const data = await moduleSearch(payload)
      return data
    },
    enabled: false
  }
    // ["search", searchInput], moduleSearch(searchInput) , {enabled : false}
    );

  const { data: moduleFeaturedData } = useQuery({
    queryKey: ['moduleFeatured'],
    queryFn: moduleFeatured,
  })

  const onClickItem = (item) => {
    setOpenModal(true);
    setOnSelected(item);
    // console.log(item, 'selected items');
  }

  const onSearch = () => {
    refetch()
  }


  return (
    <div className="bg-themeblack">
      {/* Background Image Section */}
      <div
        className="home-banner bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <SearchComponent setSearch={setSearch} onclick={onSearch} />
        <ScrollingAvatars data={searchData?.data.modules ? searchData.data.modules : trendingData?.data?.modules || []} callback={onClickItem} />
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
