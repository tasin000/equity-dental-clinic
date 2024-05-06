import React, { useState } from 'react';
import "./Header.css";
import logo from "./../../../assets/images/logo.jpg";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
;

const Header = () => {
    const [hidden, setHidden] = useState(true);
    const navLinks = [
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
    const navigate = useNavigate();
    const [loggedInUser, loggedInLoading,] = useAuthState(auth);
    if (loggedInLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="container">
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="..." onClick={() => navigate("/")} />
                    <div className="toggle-btn">
                        <div className="toggle-btn" onClick={() => setHidden(!hidden)}>
                            {hidden ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                        </div>
                    </div>
                </div>

                
                <div className={`nav-links ${hidden ? "hidden-item" : ""}`}>
                    {navLinks.map(link =>
                        <NavLink key={link.id} to={link.to} className={({ isActive }) => isActive ? "active-nav-link" : ""}>{link.name}</NavLink>)}
                    {!loggedInUser ? <NavLink to="/login" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Login</NavLink> : <Link title={loggedInUser?.email} className='log-out-btn' onClick={() => signOut(auth)}>Log Out</Link>}
                </div>
                </div>
            </div>
    );
};

export default Header;