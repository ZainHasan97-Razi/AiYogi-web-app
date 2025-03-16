import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const dummyData = [
  {img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg"},
  {img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg"},
  {img: "https://static.toiimg.com/thumb/msid-116251908,width-400,resizemode-4/116251908.jpg"},
  {img: "https://i0.wp.com/yoga.in/blogs/wp-content/uploads/2018/01/culturalindia-net.jpg?ssl=1"},
  {img: "https://m.media-amazon.com/images/I/710clkwHFTL.jpg"},
  {img: "https://canadiansikhheritage.ca/wp-content/uploads/2017/09/gurus_nanak_dev_small-1.jpg"},
];

const ScrollingAvatars = () => {
  const [selectedIndex, setSelectedIndex] = useState(Math.floor(dummyData.length / 2));
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = container.children[selectedIndex].offsetLeft - container.offsetWidth / 2 + container.children[selectedIndex].offsetWidth / 2;
    }
  }, [selectedIndex]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    dummyData.forEach((_, index) => {
      const item = container.children[index];
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(center - itemCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setSelectedIndex(closestIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {dummyData.map((d, index) => (
          <motion.img
            key={index}
            src={d.img}
            className={`w-40 h-60 object-cover rounded-xl transition-transform duration-300 snap-center ${
              index === selectedIndex ? "scale-110 shadow-xl" : "scale-100"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
export default ScrollingAvatars;