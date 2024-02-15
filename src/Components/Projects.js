import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './images/Financial Calculator.jpg';
import image2 from './images/Tax Calculator.webp';
import image3 from './images/Matrix Converter.png';
import image4 from './images/Flappy bird.jpg';
import image5 from './images/Banking App.jpg';

const ProjectSlider = () => {
  // Sample project data
  const projects = [
    { id: 1, title: 'Financial Calculator', description: 'A tool for financial calculations', imageUrl: image1 },
    { id: 2, title: 'Tax Calculator', description: 'Calculate your taxes easily', imageUrl: image2 },
    { id: 3, title: 'Matrix Converter', description: 'Convert matrices with ease', imageUrl: image3 },
    { id: 4, title: 'Flappy Bird', description: 'A fun and addictive game', imageUrl: image4 },
    { id: 5, title: 'Banking App', description: 'Manage your finances on the go', imageUrl: image5},

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
      <section className='projects'>
      <h2>My Projects</h2>
      <Slider className='Slider' {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
          </div>
        ))}
      </Slider>
      </section>
    </div>
  );
};

export default ProjectSlider;