import React, { useState } from 'react';
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
    { id: 1, title: 'Financial Calculator', description: 'This is a software application designed to help individuals and professionals perform various financial calculations quickly and accurately', imageUrl: image1, githubLink: 'https://github.com/andisiwenonkwenkwe/Financial-Calculator' },
    { id: 2, title: 'Tax Calculator', description: 'A tax calculator is a tool that helps people or businesses estimate how much they need to pay in taxes based on their income, deductions, and credits', imageUrl: image2, githubLink: 'https://github.com/andisiwenonkwenkwe/Tax-Calculator' },
    { id: 3, title: 'Matrix Converter', description: 'This Metric converter allows users to convert measurements from one unit of the metric system to another', imageUrl: image3, githubLink: 'https://github.com/andisiwenonkwenkwe/Metric-Converter' },
    { id: 4, title: 'Flappy Bird', description: 'This game is designed to navigate a small bird through a series of pipes by tapping on the screen to make the bird flap its wings.', imageUrl: image4, githubLink: 'https://github.com/andisiwenonkwenkwe/Flappy-bird-game' },
    { id: 5, title: 'Banking App', description: 'banking app allows users to access and manage their bank accounts and financial transactions on the go.', imageUrl: image5, githubLink: 'https://github.com/andisiwenonkwenkwe/Bnking-App' },
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

  // State to handle hover effect
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div>
      <section className='projects' id='projects'>
        <h2>My Projects</h2>
        <Slider className='Slider' {...settings}>
          {projects.map((project) => (
            <a key={project.id} href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <div
                className="project-container"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Show description only when hovered over */}
                <div className="description-container" style={{ display: hoveredProject === project.id ? 'block' : 'none' }}>
                  <p className="description">{project.description}</p>
                </div>
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                {/* GitHub Button */}
                <button className='github'>GitHub</button>
              </div>
            </a>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ProjectSlider;