import React from 'react';


import vimage from './images/Banking App.jpg';
import iimage from './images/Matrix Converter.png';
import Iimage from './images/6.jpg';
import mimage from './images/Tax Calculator.webp';

const Projects = () => {
  const projects = [
    {
        title: 'Bakery Website',
        image: vimage,
        description: 'This is an online platform created to showcase its products, provide information to customers, and often facilitate online ordering or inquiries.'
    },
    {
        title: 'Banking App',
        image: iimage,
        description: 'Banking app allows users to access and manage their bank accounts and financial transactions on the go.'
    },
    {
        title: 'Financial Calculator',
        image: Iimage,
        description: 'This is a software application designed to help individuals and professionals perform various financial calculations quickly and accurately.'
    },
    {
        title: 'Metrics Converter',
        image: mimage,
        description: 'This Metric converter allows users to convert measurements from one unit of the metric system to another.'
    },
    
  ];

  return (
    <div>
      <h2>Projects</h2>
 
    </div>
  );
};

export default Projects;