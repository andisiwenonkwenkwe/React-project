import React from 'react';
import './App.css';

import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>

  );
};


export default App;