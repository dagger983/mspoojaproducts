import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home_RawAgarbathi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="home-raw">
      <div data-aos="fade-right">
        <h1>Raw Agarbatti</h1>
        <br />
        <p>
          MS Natural Pooja Products, Tiruchirappalli, Tamil Nadu <br />
          Brand: MS pooja <br />
          Products Grade: 1st <br />
          Number Of Stick: 1000 above <br />
        </p>
        <br />
        <button>Shop Now</button>
      </div>
      <div data-aos="fade-left">
        <img src="/Raw_Agarbatti.png" alt="Raw Agarbatti" />
      </div>
    </div>
  );
};

export default Home_RawAgarbathi;
