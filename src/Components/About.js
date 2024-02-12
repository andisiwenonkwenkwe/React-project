import React from 'react';
import image from './images/012.jpg';

const About = () => {
    return (
        <div className="about" id="about">
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="title-left">
                                           About me
                                       </h5>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src={image} className="img-fluid rounded b-shadow-a" alt="" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Skill</p>
                                            <span>HTML</span> <span className="pull-right">98%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            {/* Other skill spans and progress bars */}
                                            <span>CSS</span> <span className="pull-right">95%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>JavaScript</span> <span className="pull-right">95%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Java</span> <span className="pull-right">95%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Python</span> <span className="pull-right">95%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                         
                                            <p className="lead">
                                                I am a results-driven professional in the field of Information Technology 
                                                with a National Diploma in Software Development from Walter Sisulu University. Currently based in Cape Town.
                                                I bring a diverse skill set that includes Java, Python, JavaScript,
                                                HTML/CSS, and database development. My practical experience as a Software Development Intern at 
                                                Capaciti has honed my ability to design applications and websites, contributing to my 
                                                proficiency in full-stack development. I am an analytical thinker, punctual, and self-motivated, demonstrating
                                                leadership and planning skills. Whether working collaboratively as a team member or independently, I am dedicated 
                                                to identifying and implementing effective solutions to challenges. With a strong academic background, technical 
                                                expertise, and a passion for problem-solving, I am ready to contribute to innovative projects and advance my career
                                                in the dynamic world of software development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;