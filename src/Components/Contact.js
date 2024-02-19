import React from 'react';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <section id="contact" className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="contact-mf">
                                <div id="contact" className="box-shadow-full">
                                    <div className="title-box-">
                                        <h1 className="title-center">
                                            Contact Me
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Send Me A Message
                                                </h5>
                                            </div>
                                            <div>
                                                <form id="contactForm" className='form'>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Your Name</label>
                                                        <input type="text" name="name" className="form-control" id="name"  required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Your Surname</label>
                                                        <input type="text" name="Surname" className="form-control" id="surname"  required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Your Email</label>
                                                        <input type="email" name="email" className="form-control" id="email"  required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message">Your Message</label>
                                                        <textarea name="message" className="form-control" id="message" rows="5" required></textarea>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="button">Send Message</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer" id="footer">
         
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>Andisiwe</strong>. All Rights Reserved</p>
                                <div className="credits">
                                    {/* Any additional content or credits */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
           
        </div>
            </section>
        </div>
    );
};

export default Contact;