import { useAnimation } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const dummyData = [
  { img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg" },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  { img: "https://static.toiimg.com/thumb/msid-116251908,width-400,resizemode-4/116251908.jpg" },
  { img: "https://i0.wp.com/yoga.in/blogs/wp-content/uploads/2018/01/culturalindia-net.jpg?ssl=1" },
];

const ScrollingAvatars = ({ data = dummyData, callback = () => {} }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
    // const [centerIndex, setCenterIndex] = useState(Math.floor(data.length / 2));
  
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToCenter = (index) => {
    if (containerRef.current) {
      const selectedItem = containerRef.current.children[index];
      if (!selectedItem) return;
  
      const itemWidth = selectedItem.offsetWidth;
      const itemOffsetLeft = selectedItem.offsetLeft;
      const screenWidth = window.innerWidth;
  
      // Calculate the scrollLeft to center the selected image
      const scrollLeft = itemOffsetLeft - (screenWidth / 2) + (itemWidth / 2);
  
      containerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      // const itemWidth = containerRef.current.children[0]?.offsetWidth || 180;
      // const containerWidth = containerRef.current.offsetWidth;
      // Calculate the closest item to the center
      // const centerIndex = Math.round((scrollLeft + containerWidth / 2) / itemWidth);
      setScrollPosition(scrollLeft);
      // setCenterIndex(centerIndex);
    }
  };
  



  // useEffect(() => {
  //   scrollToCenter(centerIndex);
  // }, [centerIndex]);

  // const scrollToCenter = (index) => {
  //   if (containerRef.current) {
  //     const itemWidth = 180 + 16; // item width + margin
  //     const scrollTo = index * itemWidth - (containerWidth / 2 - itemWidth / 2);
  //     containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  //   }
  // };

  return (
    <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="head-slide-lists flex overflow-x-auto scrollbar-hide py-20"
          onScroll={handleScroll}
        >
          {data.map((item, index) => {
            const itemWidth = containerRef?.current?.children[0]?.offsetWidth || 180;
            const itemOffset = index * (itemWidth + 16);
            const containerCenter = containerWidth / 2;
            const distanceFromCenter = Math.abs(
              itemOffset - scrollPosition + itemWidth / 2 - containerCenter
            );

            const maxScale = 1.2;
            const minScale = 0.7;
            const scale = Math.max(
              minScale,
              maxScale - (distanceFromCenter / containerCenter) * (maxScale - minScale)
            );

            const isActive = distanceFromCenter < itemWidth / 2;
            
            return (
              <div
                key={index}
                className={`head-slide-item flex-shrink-0 w-40 h-40 m-2 cursor-pointer hover:opacity-80 transition-transform duration-200 ${isActive ? 'border-4 border-selectedborder' : ''}`}
                style={{ transform: `scale(${scale})` }}
                onClick={() => {
                  callback(item);
                  scrollToCenter(index);
                }}
              >
                <img
                  src={item.bannerImageUrl || item.img}
                  alt={`Avatar ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollingAvatars;


