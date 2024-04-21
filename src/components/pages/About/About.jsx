import React from 'react';
import "./About.css";
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const About = () => {
    return (
        <div>
            <div>
                <Header></Header>

                
                    <div className="container">
                    <div className="page-heading">
                        <p>Know About Me</p>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className="about-container">
                    <div className="w-50">
                        <UserCircleIcon />
                    </div>

                    <div className="vr-line"></div>

                    <div className="w-50">
                        <h1>Hi from Tasin!</h1>
                        <p>I am Mohammad Tasin. I'm fifteen. I am currently learning React Authentication. My goal is to become a full stack web developer. To achieve the goal, I have to be dedicated to it, be consistent and hardworking. </p>
                    </div>
                    </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
    );
};

export default About;