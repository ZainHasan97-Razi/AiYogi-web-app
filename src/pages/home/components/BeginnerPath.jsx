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

const BeginnerPath = () => {
  return (
    <>
      <p className="text-textwhite text-center m-2 font-bold">BEGINNER'S PATH</p>
      <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap">
      {dummyData.map((item, index) => (
          <div
          key={index}
          className="flex-shrink-0 w-40 h-40 m-2 cursor-pointer hover:opacity-80 transition-transform duration-200 hover:scale-110"
          onClick={() => console.log(`Clicked image ${index}`)}
          >
          <img
              src={item.img}
              alt={`Avatar ${index}`}
              className="w-full h-full object-cover rounded-lg"
          />
          </div>
      ))}
      </div>
    </>
  );
};

export default BeginnerPath;
