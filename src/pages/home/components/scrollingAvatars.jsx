import React from "react";

const dummyData = [
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://static.toiimg.com/thumb/msid-116251908,width-400,resizemode-4/116251908.jpg",
  },
  {
    img: "https://i0.wp.com/yoga.in/blogs/wp-content/uploads/2018/01/culturalindia-net.jpg?ssl=1",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://static.toiimg.com/thumb/msid-116251908,width-400,resizemode-4/116251908.jpg",
  },
  {
    img: "https://i0.wp.com/yoga.in/blogs/wp-content/uploads/2018/01/culturalindia-net.jpg?ssl=1",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://static.toiimg.com/thumb/msid-116251908,width-400,resizemode-4/116251908.jpg",
  },
  {
    img: "https://i0.wp.com/yoga.in/blogs/wp-content/uploads/2018/01/culturalindia-net.jpg?ssl=1",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
  {
    img: "https://i0.wp.com/yoga.in/blogs/wp-content/uploads/2018/01/culturalindia-net.jpg?ssl=1",
  },
  { img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg" },
  {
    img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg",
  },
];

const ScrollingAvatars = ({data=[], callback}) => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 overflow-x-auto translate-y-1/2">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-themeblack to-transparent pointer-events-none"></div>

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-themeblack to-transparent pointer-events-none"></div>
        
        {/* <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-40 m-4 cursor-pointer hover:opacity-80 transition-transform duration-200 hover:scale-110"
              onClick={() => callback(item)}
            >
              <img
                src={item.bannerImageUrl}
                alt={`Avatar ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="head-slide-list">
            {data.map((item, index) => (item?.bannerImageUrl ? 
              <div
                key={index}
                className="head-slide-item"
                onClick={() => callback(item)}
              >
                  <img
                    src={item.bannerImageUrl}
                    alt={`Avatar ${index}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
              </div>
            : ''))}
          </div>
        </div>

      </div>
    </>
  );
};

export default ScrollingAvatars;
