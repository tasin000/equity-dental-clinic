import React from 'react';
import "./Contact.css";
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faLocationDot, faMagnifyingGlass, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="contact-container">
                    <div style={{margin: "0 15px"}}>
                    <div className="page-heading">
                        <p>Connect with Us</p>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    </div>
                    <div className="contact-options my-large">
                        <div className="w-50">
                            <div className="section-heading">
                                <h3>
                                    Follow Us
                                    <span>
                                        <FontAwesomeIcon icon={faUserPlus} />
                                    </span>
                                </h3>
                            </div>

                            <div className="social-links-container">
                                <div className="social-link">
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#0091ff", }} />/EquityDentalClinic

                                </div>

                                <div>
                                    <div className="social-link">
                                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#ff00d4", }} />/equitydentalclinic

                                    </div>

                                    <div className="social-link">
                                        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#000000", }} />/equitydentalclinic

                                    </div>

                                    <div className="social-link">
                                        <FontAwesomeIcon icon={faYoutube} style={{ color: "#ff0000", }} />/@equitydentalclinic

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="section-heading">
                                <h3>Find Us <span>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} /></span></h3>

                            </div>

                            <div>
                                <div className="social-links-container">
                                    <div className="social-link">
                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#B197FC", }} /> <span>Address:</span> Mehedibag, Chattogram
                                    </div>
                                    <div className="social-link">
                                        <FontAwesomeIcon icon={faHandshakeAngle} style={{ color: "#e0ac69", }} /> <span>Helpline:</span> 16245
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;