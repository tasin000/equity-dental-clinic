import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const footerLinks = [
        {
            "id": 1,
            "to": "/", "name": "Home"
        },
        {
            "id": 2,
            "to": "/about", "name": "About"
        },
        {
            "id": 3,
            "to": "/services", "name": "Services"
        },
        {
            "id": 4,
            "to": "/blogs", "name": "Blogs"
        },
        {
            "id": 5,
            "to": "/contact", "name": "Contact"
        }
    ]
    return (
        <div className="container">
            <div className='footer-container'>
                <div className="footer-links">
                    {footerLinks.map(link => <Link key={link.id} to={link?.to}>{link?.name}</Link>)}
                </div>

                <div>
                    <p>&copy; Copyright {date.getFullYear()} - Equity Dental Clinic</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;