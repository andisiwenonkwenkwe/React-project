import React from 'react';
import vimage from './images/Financial Calculator.jpg';
import iimage from './images/Banking App.jpg';
import mimage from './images/Flappy bird.jpg';
import Iimage from './images/Tax Calculator.webp';
import Nimage from './images/Banking App.jpg';


const Projects = () => {
    return (
        <section id="projects" className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                Projects
                            </h3>
                        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                                <div className="work-img">
                                    <img src={vimage} alt="bakery Website" />
                                    <div className="work-content">
                                    <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Bakery Website</h2>
                                        <p>This is an online platform created to showcase its products, provide information to customers,
                                            and often facilitate online ordering or inquiries.</p>
                                    </div>
         
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                                <div className="work-img">
                                    <img src={iimage} alt="" className="img-fluid" />
                                </div>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Banking App</h2>
                                        <p>Banking app allows users to access and manage their bank accounts and financial transactions on the go.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                           
                                <div className="work-img">
                                    <img src={iimage} alt="" className="img-fluid" />
                                </div>
                          
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Financial Calculator</h2>
                                        <p>This is a software application designed to help individuals and professionals
                                            perform various financial calculations quickly and accurately.</p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                           
                                <div className="work-img">
                                    <img src="flappy bird.PNG" alt="" className="img-fluid" />
                                </div>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Flappy Bird</h2>
                                        <p>This game is designed to navigate a small bird through a series of
                                            pipes by tapping on the screen to make the bird flap its wings.</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                           
                                <div className="work-img">
                                    <img src={mimage} alt='flappy bird ' />
                                </div>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Metrics Converter</h2>
                                        <p>This Metric converter allows users to convert measurements from one unit of the metric system to another.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                           
                                <div className="work-img">
                                    <img src="checkers.PNG" alt="" className="img-fluid" />
                                </div>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Checkers game</h2>
                                        <p>This game involves moving pieces diagonally across the board and capturing the
                                            opponent's pieces by jumping over them. </p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;