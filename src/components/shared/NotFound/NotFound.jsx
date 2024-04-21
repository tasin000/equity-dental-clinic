import React from 'react';
import "./NotFound.css";
import notFoundImg from "../../../assets/images/404_page.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img src={notFoundImg} alt="..." />
            <p>Sorry! The page you're looking for is not available...</p>
            <Link to="/">
            <span>Back to Home</span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            </Link>
        </div>
    );
};

export default NotFound;