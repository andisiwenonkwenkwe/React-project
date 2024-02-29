import React from 'react';
import './App.css';





import Navbar from './Components/Home/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Slideshow from './Components/Testimonies/Testimonies';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'






const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
    <Projects />
    <Slideshow/>
    <Contact />
    
      </div>
  );
};


export default App;