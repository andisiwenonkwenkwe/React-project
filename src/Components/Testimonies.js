import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS


import nature1 from './images/Banking App.jpg';
import nature2 from './images/Tax Calculator.webp';
import nature3 from './images/Matrix Converter.png';
import nature4 from './images/Financial Calculator.jpg';

function Testimonies() {
  useEffect(() => {
    const swiper = new Swiper('.cubeSwiper', {
      // Swiper configuration options...
      effect: 'cube',
      grabCursor: true,
      pauseOnMouseEnter: true,
      speed: 2000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

    // Destroy swiper instance when component unmounts
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div>
      <h1>Testimonies</h1>
      <div className="cube-parent-container">
        <div className="swiper cubeSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={nature1} alt="Nature 1" />
            </div>
            <div className="swiper-slide">
              <img src={nature2} alt="Nature 2" />
            </div>
            <div className="swiper-slide">
              <img src={nature3} alt="Nature 3" />
            </div>
            <div className="swiper-slide">
              <img src={nature4} alt="Nature 4" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
     
    </div>
  );
}

export default Testimonies;