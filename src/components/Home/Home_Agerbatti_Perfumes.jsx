import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Home.css";

const Home_Agerbatti_Perfumes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div className="home-agar">
        <div data-aos="fade-right">
          <img className="agar1" src="/Agerbatti_Perfumes1.png" alt="" />
        </div>
        <div data-aos="fade-up">
          <h1>Agerbatti Perfumes</h1>
          <p>Sold By - MS Natural Pooja Products, Tiruchirappalli, Tamil Nadu</p>
          <button>Shop Now</button>
        </div>
        <div data-aos="fade-left">
          <img className="agar2" src="/Agerbatti_Perfumes2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home_Agerbatti_Perfumes;
