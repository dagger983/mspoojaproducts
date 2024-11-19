import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home_Scented_Agarbatti = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,    // Animation will trigger every time on scroll
    });
  }, []);

  return (
    <>
      <div className="home-scent">
        <div className="home-scent-img1" data-aos="fade-right">
          <img src="/scented_agarabti_1.png" alt="Agarbatti 1" />
        </div>
        <div className="home-scent-text" data-aos="fade-up">
          <h1>Scented Agarbatti</h1>
          <p>
            ₹ 170/ Kg <br />
            Sold By - MS Natural Pooja Products, Tiruchirappalli,<br />
            Tamil Nadu <br />
            Fragrance: All <br />
            Color: Black<br />
          </p>
          <button data-aos="zoom-in">Shop Now</button>
        </div>
        <div className="home-scent-img2" data-aos="fade-left">
          <img src="/scented_agarabti_2.png" alt="Agarbatti 2" />
        </div>
      </div>
    </>
  );
};

export default Home_Scented_Agarbatti;
