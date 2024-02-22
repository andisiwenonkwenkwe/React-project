import React, { useState, useEffect, useRef } from 'react';
import image1 from './images/madubela.jpeg';
import image2 from './images/Nonkululeko.jpeg';
import image3 from './images/asiphemhambi.jpeg';

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = [
    { imageUrl: image1, text: "Working with Andisiwe was an absolute pleasure! Her attention to detail and creativity surpassed my expectations. She took my vision and brought it to life with her exceptional skills. Not only did she deliver outstanding results, but she also made the entire process seamless and enjoyable. I highly recommend Andisiwe for anyone looking for top-notch design and development services", name: "Langa Madubela" },
    { imageUrl: image2, text: "I cannot speak highly enough of Andisiwe's professionalism and talent. From our initial consultation to the final product, Andisiwe demonstrated an unwavering commitment to excellence. Her ability to understand my needs and translate them into a stunning design was remarkable. The website she created for me exceeded all my expectations and has been instrumental in enhancing my online presence. Thank you, Andisiwe, for your dedication and expertise", name: "Nonkululeko Mzalwana" },
    { imageUrl: image3, text: "Andisiwe is a true gem in the world of design. Her innovative ideas and exceptional craftsmanship set her apart from the rest. She not only designed a beautiful website for my business but also provided invaluable insights and guidance throughout the process. Working with Andisiwe was a collaborative and enriching experience, and the results speak for themselves. I am incredibly grateful for her expertise and would recommend her services to anyone seeking excellence in design", name: "Asiphe Mhambi" }
  ];

  const colors = ["#8ACDD7", "#8ACDD7", "#8ACDD7"];
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" id='testimonies'>
      <h2>Testimonies</h2>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundColor: colors[idx] }}
          >
            <img src={slide.imageUrl} alt={`Slide ${idx + 1}`} />
            <h3>{slide.name}</h3>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;