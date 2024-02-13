import React from 'react';
import './App.css';

import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>

  );
};


export default App;