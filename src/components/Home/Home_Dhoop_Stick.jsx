import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Home.css";

const Home_Dhoop_Stick = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,once:false }); // Initialize AOS with a default duration
  }, []);

  return (
    <>
      <div className="home_dhoop">
        <div data-aos="fade-right">
          <img className="dhoopstick1" src="/dhoopstick.png" alt="" />
        </div>
        <div data-aos="fade-up">
          <h1>Dhoop Stick</h1>
          <p>
            Sold By - MS Natural Pooja Products, <br />
            Tiruchirappalli, Tamil Nadu <br />
            Fragrance: Sambrani <br />
            Product Type: Natural <br />
            Brand: Dhoop stick <br />
            Material: Charcoal <br />
          </p>
          <button>Shop Now</button>
        </div>
        <div data-aos="fade-left">
          <img className="dhoopstick2" src="/dhoopstick2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home_Dhoop_Stick;
