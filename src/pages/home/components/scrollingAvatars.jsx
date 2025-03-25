import React, { useRef, useState } from "react";
// import { TransitionGroup } from "react-transition-group";


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
  // var ReactCSSTransitionGroup = TransitionGroup;
  // class CustomCarousel extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       items: this.props.items,
  //       active: this.props.active,
  //       direction: ''
  //     }
  //     this.rightClick = this.moveRight.bind(this)
  //     this.leftClick = this.moveLeft.bind(this)
  //   }
  
  //   generateItems() {
  //     var items = []
  //     var level
  //     console.log(this.state.active)
  //     for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
  //       var index = i
  //       if (i < 0) {
  //         index = this.state.items.length + i
  //       } else if (i >= this.state.items.length) {
  //         index = i % this.state.items.length
  //       }
  //       level = this.state.active - i
  //       console.log('gi', items)
  //       items.push(<Item key={index} id={this.state.items[index]} level={level} />)
  //     }
  //     return items
  //   }
      
  //   moveLeft() {
  //     var newActive = this.state.active
  //     newActive--
  //     this.setState({
  //       active: newActive < 0 ? this.state.items.length - 1 : newActive,
  //       direction: 'left'
  //     })
  //   }
      
  //   moveRight() {
  //     var newActive = this.state.active
  //     this.setState({
  //       active: (newActive + 1) % this.state.items.length,
  //       direction: 'right'
  //     })
  //   }
      
  //   render() {
  //     return(
  //       <div id="custom-carousel" className="noselect">
  //         <div className="arrow arrow-left" onClick={this.leftClick}>
  //           <svg fill="#000000" height="800px" width="800px" version="1.1" viewBox="0 0 330 330">
  //           <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001  l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996  C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
  //           </svg>
  //         </div>
  //         <ReactCSSTransitionGroup 
  //           transitionName={this.state.direction}>
  //           {this.generateItems()}
  //         </ReactCSSTransitionGroup>
  //         <div className="arrow arrow-right" onClick={this.rightClick}>
  //           <svg fill="#000000" height="800px" width="800px" version="1.1" viewBox="0 0 330.002 330.002">
  //           <path id="XMLID_103_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21  l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001  c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"/>
  //           </svg>
  //         </div>
  //       </div>
  //     )
  //   }
  // }
  
  // class Item extends React.Component { 
  //   // constructor(props) {
  //   //   super(props)
  //   //   this.state = {
  //   //     level: this.props.level
  //   //   }
  //   // }
      
  //   render() {
  //     const className = 'item level' + this.props.level
  //     return(
  //       <div className={className}>
  //         <div
  //             // key={this?.props?.key}
  //             className="custom-carousel-item"
  //             onClick={() => callback(this?.props?.id)}
  //           >
  //               <img
  //                 src={this?.props?.id?.bannerImageUrl || ''}
  //                 alt={`Avatar ${this?.props?.level || ''}`}
  //                 className="w-full h-full object-cover rounded-lg"
  //               />
  //           </div>
  //       </div>
  //     )
  //   }
  // }


    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
  
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        setScrollPosition(scrollLeft);
      }
    };

  return (<>
    {/* <div className="absolute bottom-0 left-0 right-0 translate-y-1/2"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="head-slide-list">
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
        </div> */}
        {/* <CustomCarousel items={data} active={0}/> */}


        <div
          ref={containerRef}
          className="head-slide-lists flex overflow-x-auto scrollbar-hide"
          onScroll={handleScroll}
        >
          {data.map((item, index) => {
            if (!item?.bannerImageUrl) return null;

            // Calculate the item's position relative to the center
            const itemWidth = 180; // Adjust based on your item's width (w-40 = 160px)
            const itemOffset = index * (itemWidth + 16); // 16px is the margin (m-2 = 8px on each side)
            const containerCenter = (containerRef.current?.clientWidth || 0) / 2;
            const distanceFromCenter = Math.abs(
              itemOffset - scrollPosition + itemWidth / 2 - containerCenter
            );

            // Calculate scale based on distance from center
            const maxScale = 1.1; // Maximum scale for the center item
            const minScale = 0.6; // Minimum scale for the side items
            const scale = Math.max(
              minScale,
              maxScale - (distanceFromCenter / containerCenter) * (maxScale - minScale)
            );

            return (
              <div
                key={index}
                className="head-slide-item flex-shrink-0 w-40 h-40 m-2 cursor-pointer hover:opacity-80 transition-transform duration-200"
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
    {/* </div> */}
  </>);
};

export default ScrollingAvatars;
