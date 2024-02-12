import React, { useEffect } from 'react';
import Typed from 'typed.js';
import image from './images/012.jpg';

const Home = () => {
    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ["Software Developer", "Backend Developer", "Front-end Developer", "Web Developer"],
            typeSpeed: 100,
            loop: true
        };

        // Initialize Typed.js
        const typed = new Typed('.typed', options);

        // Cleanup function
        return () => {
            typed.destroy(); // Destroy Typed instance to prevent memory leaks
        };
    }, []); // Run only once when the component mounts

    return (
        <div>
            <div className="home" id="home">
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="hero-title">I am Andisiwe Nonkwenkwe</h1>
                            <p className="hero-subtitle">
                                <span className="typed"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
    <div className='abtImageContainer'>
                <div className="abtImage">
                    <img src={image} alt="my image" />
                    <button className="btn">Download CV</button>
                </div>
            </div>
    </div>
    );
};

export default Home;