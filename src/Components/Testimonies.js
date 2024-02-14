import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './images/Financial Calculator.jpg';
import image2 from './images/Tax Calculator.webp';
import image3 from './images/Matrix Converter.png';
import image4 from './images/Flappy bird.jpg';

const ProjectSlider = () => {
  // Sample project data
  const projects = [
    { id: 1, title: 'Thee Best Construction Website', imageUrl: image1 },
    { id: 2, title: 'Financial Calculator', imageUrl: image2 },
    { id: 3, title: 'Chat App', imageUrl: image3 },
    { id: 4, title: 'Bank App', imageUrl: image4 },

  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h2>My Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;