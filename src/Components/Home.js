import React, { useEffect } from 'react';
import Typed from 'typed.js';
import image from './images/012.jpg';
import cvPDF from './Documents/andisiwe.pdf';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ["Software Developer", "Backend Developer", "Front-end Developer", "Web Developer"],
            typeSpeed: 100,
            loop: true,
            showCursor: false
        };

        // Initialize Typed.js
        const typed = new Typed('.typed', options);

        // Cleanup function
        return () => {
            typed.destroy(); // Destroy Typed instance to prevent memory leaks
        };
    }, []); // Run only once when the component mounts

    // Function to handle the download of the CV PDF
    const handleDownloadCV = () => {
        window.open(cvPDF, '_blank'); // Open the PDF in a new tab/window for download
    };

    return (
        <div>
            <div className="home" id="home">
               
                  
                        <div className="container">
                            <h1 className="hero-title"> Hellow I am  <span>Andisiwe Nonkwenkwe</span></h1>
                            <p className="hero-subtitle">
                                <span className="typed"></span>
                            </p>
                        </div>
                   
               
            
                <div className='HomeImageContainer'>
                    <div className="homeImage">
                        <img src={image} alt="my image" />
                        {/* Use an anchor tag with download attribute to trigger the download */}
                        <a href={cvPDF} download="Andisiwe_Nonkwenkwe_CV.pdf" className="btn" onClick={handleDownloadCV}>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;