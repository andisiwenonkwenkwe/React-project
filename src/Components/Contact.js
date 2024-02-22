import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import github from './images/github-logo.svg';
import linkedin from './images/linkedin.svg';
import phone from './images/phone.svg';
import emailIcon from './images/envelope.svg';
import whatsapp from './images/whatsapp.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const Contact = () => {
    const form = useRef(); // Create a reference to the form element
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [captchaCompleted, setCaptchaCompleted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaCompleted) {
            alert('Please complete the reCAPTCHA');
            return;
        }

        emailjs
            .sendForm('service_5xnq7ne', 'template_l1z9p68', form.current, 'OMwDeE5MQwjZ9F1p6')
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    // Reset form fields after successful submission
                    form.current.reset();
                    // Show success message
                    setShowSuccessMessage(true);
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 5000);
                },
                (error) => {
                    console.error('Error sending email:', error.text);
                }
            );
    };

    return (
        <div className="contact" id="contact">
            <section className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="contact-mf">
                                <div className="box-shadow-full">
                                    <div className="title-box-">
                                        <h1 className="title-center">
                                            Contact Me
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Send Me A Message
                                                </h5>
                                            </div>
                                            <div>
                                                <form onSubmit={sendEmail} ref={form} className='form'>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Your Name</label>
                                                        <input type="text" name="name" className="form-control" id="name" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Your Email</label>
                                                        <input type="email" name="email" className="form-control" id="email" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="subject">Subject</label>
                                                        <input type="text" name="subject" className="form-control" id="subject" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message">Your Message</label>
                                                        <textarea name="message" className="form-control" id="message" rows="5" required></textarea>
                                                    </div>

                                                    <ReCAPTCHA
                                                        sitekey="6LexsXopAAAAAPHoY1K85aRza7JEZsNJxWazZ9i8"
                                                        onChange={(value) => {
                                                            console.log('Captcha value:', value);
                                                            setCaptchaCompleted(true);
                                                        }}
                                                    />
                                                    <div className="text-center">
                                                        <button type="submit" className="button">Send Message</button>
                                                    </div>
                                                </form>
                                                {showSuccessMessage && (
                                                    <div className="success-message">
                                                        You have successfully submitted the message.
                                                    </div>
                                                )}
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
                        
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="social-icons">
                                        <a href="https://github.com/andisiwenonkwenkwe?tab=repositories" target="_blank">
                                            <img src={github} alt="github" />
                                        </a>
                                        <a href="tel:+27784171550" target="_blank">
                                            <img src={phone} alt="phone" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/andisiwe-nonkwenkwe/" target="_blank">
                                            <img src={linkedin} alt="linkedin" />
                                        </a>
                                        <a href="mailto:andisiwenonkwenkwe30@gmail.com" target="_blank">
                                            <img src={emailIcon} alt="email" />
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=2784171550" target="_blank">
                                            <img src={whatsapp} alt="whatsapp" />
                                        </a>
                                    </div>
                                    <div className="copyright-box">
                                        <p className="copyright">
                                            &copy; Copyright <strong>Andisiwe</strong>.
                                            All Rights Reserved
                                        </p>
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