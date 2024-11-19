// Home_Carousel.js
import React from "react";
import Slider from "react-slick";
import "./Home.css"; // Ensure this path matches your file structure
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home_Carousel = () => {
  const items = [
    { id: 1, src: "/product1.webp", alt: "Item 1" },
    { id: 2, src: "/product2.webp", alt: "Item 2" },
    { id: 3, src: "/product3.webp", alt: "Item 3" },
    { id: 4, src: "/product4.png", alt: "Item 4" },
    { id: 5, src: "/product5.webp", alt: "Item 5" },
    { id: 6, src: "/product6.webp", alt: "Item 6" },
  ];

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Show 3 items at a time for larger screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.src} alt={item.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home_Carousel;
