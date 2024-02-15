import React from 'react';
import './App.css';


import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact'






const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    <Projects />
    <Contact />
    
      </div>
  );
};


export default App;