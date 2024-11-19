import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home_Tag = () => {
  useEffect(() => {
    AOS.init({
      once: false, 
    });
  }, []);

  return (
    <>
      <div className="home_tag">
        <div data-aos="fade-up">
          <img className="home-tag-img" src="/tag1.png" alt="Tag 1" />
        </div>
        <div data-aos="fade-up">
          <img className="home-tag-img" src="/tag2.png" alt="Tag 2" />
        </div>
        <div data-aos="fade-up">
          <img className="home-tag-img" src="/tag3.png" alt="Tag 3" />
        </div>
      </div>
    </>
  );
};

export default Home_Tag;
