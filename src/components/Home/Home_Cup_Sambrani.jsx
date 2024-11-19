import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Home.css";

const Home_Cup_Sambrani = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with replay enabled
  }, []);

  return (
    <>
      <div className="home-cup">
        <div data-aos="fade-right">
          <img className="cup-sambrani" src="/cup_sambrani.png" alt="" />
        </div>
        <div data-aos="fade-up">
          <h1>Cup Sambrani</h1>
          <p>
            ₹ 38/ Box <br />
            Sold By - MS Natural Pooja Products, Tiruchirappalli, <br />
            Tamil Nadu <br />
            Material: Charcoal <br />
            1 Box Contain: 12
          </p>
          <button>Shop Now</button>
        </div>
        <div data-aos="fade-left">
          <img
            className="sai-cup-sambrani"
            src="/cup_sambrani2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home_Cup_Sambrani;
