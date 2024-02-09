import React from 'react';
import image from './images/012.jpg';

const Home = () => {
    return (
        <div>
            <div className="home" id="home">
                <div className="overlay-itro"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="hero-title mb-4">I am Andisiwe Nonkwenkwe</h1>
                            <p className="hero-subtitle">
                                <span className="typed" data-typed-items="Software Developer, Backend Developer, Front-end Developer, Web-Developer"></span>
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
