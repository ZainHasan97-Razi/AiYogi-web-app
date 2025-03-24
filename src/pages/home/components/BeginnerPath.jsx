import React, { useState, useRef } from "react";

const BeginnerPath = ({ data, callback }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      setScrollPosition(scrollLeft);
    }
  };

  return (
    <>
      <p className="text-textwhite text-center m-2 font-bold">BEGINNER'S PATH</p>
      <div className="bottom-0 left-0 right-0 overflow-x-auto relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide whitespace-nowrap"
          onScroll={handleScroll}
        >
          {data.map((item, index) => {
            if (!item?.bannerImageUrl) return null;

            // Calculate the item's position relative to the center
            const itemWidth = 160; // Adjust based on your item's width (w-40 = 160px)
            const itemOffset = index * (itemWidth + 16); // 16px is the margin (m-2 = 8px on each side)
            const containerCenter = (containerRef.current?.clientWidth || 0) / 2;
            const distanceFromCenter = Math.abs(
              itemOffset - scrollPosition + itemWidth / 2 - containerCenter
            );

            // Calculate scale based on distance from center
            const maxScale = 1.2; // Maximum scale for the center item
            const minScale = 0.8; // Minimum scale for the side items
            const scale = Math.max(
              minScale,
              maxScale - (distanceFromCenter / containerCenter) * (maxScale - minScale)
            );

            return (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 m-2 cursor-pointer hover:opacity-80 transition-transform duration-200"
                style={{ transform: `scale(${scale})` }}
                onClick={() => callback(item)}
              >
                <img
                  src={item.bannerImageUrl}
                  alt={`Avatar ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BeginnerPath;