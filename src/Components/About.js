import React from 'react';
import image from './images/012.jpg';

const About = () => {
    return (
        <div className="about" id="about-section">
            <section className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-img-container">
                                <img src={image} alt="About Me" className="about-img" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="about-content">
                                <div className="box-shadow-full">
                                        <h5 className="title-left">About Me</h5>
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
                                        <div className="skill-mf">
                                            <p className="title-s">Skills</p>
                                            <div className="skill-list">
                                                <span>HTML</span> <span className="pull-right">98%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
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