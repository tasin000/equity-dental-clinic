import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import emailSentImg from "../../../assets/images/gif/email-sent.gif";

const VerificationSent = () => {
    return (
        <div className='not-found-container'>
            <img className='email-sent-container' src={emailSentImg} alt="..." />
        <p>Verification email has been sent!</p>
        <p>Please check your inbox...</p>
        <Link to="/">
        <span>Back to Home</span>
        <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
    </div>
    );
};

export default VerificationSent;