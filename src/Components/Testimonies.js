import React, { useState, useEffect, useRef } from 'react';
import image1 from './images/2.jpg';
import image2 from './images/1.jpg';
import image3 from './images/3.jpg';


function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = [
    { imageUrl: image1, text: "Text for Slide 1" },
    { imageUrl: image2, text: "Text for Slide 2" },
    { imageUrl: image3, text: "Text for Slide 3" }
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
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
    <div className="slideshow">
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
