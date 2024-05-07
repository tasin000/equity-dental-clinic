import React from 'react';
<<<<<<< HEAD
import likeBtn from "../../../../assets/images/gif/like.gif";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ConfirmAppointment = () => {
    return (
        <div className='not-found-container'>
            <img style={{maxHeight: "300px", width: "auto", margin: "15px 0 30px"}} src={likeBtn} alt="..." />
            <p>Thank you for appointing!</p>
            <p>We will contact to you soon...</p>
            <Link to="/">
            <span>Back to Home</span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            </Link>
=======

const ConfirmAppointment = () => {
    return (
        <div>
            
>>>>>>> df3676e027d7e329f9f68b522c2f3b4c23b85574
        </div>
    );
};

export default ConfirmAppointment;