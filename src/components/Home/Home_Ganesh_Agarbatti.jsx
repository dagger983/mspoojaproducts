import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home_Ganesh_Agarbatti = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
    });
  }, []);

  return (
    <div className="home-ganesh">
      <div data-aos="fade-up">
        <img className="home-ganesh-img" src="/product1.webp" alt="Ganesh Agarbatti" />
      </div>
      <div className="home-ganesh-text" data-aos="fade-right">
        <h1>Ganesh Agarbatti</h1>
        <br />
        <p>
          ₹ 200/ Dozen <br />
          Sold By - MS Natural Pooja Products, Tiruchirappalli, <br />
          Tamil Nadu <br />
        </p>
        <br />
        <button>Shop Now</button>
      </div>
      <div data-aos="fade-left">
        <img className="home-uthupathi-img" src="/uthupathi.png" alt="Uthupathi" />
      </div>
    </div>
  );
};

export default Home_Ganesh_Agarbatti;
