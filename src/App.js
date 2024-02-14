import React from 'react';
import './App.css';


import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';

import Testimonies from './Components/Testimonies';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    <Testimonies />
    
      
      </div>
  
    

  );
};


export default App;