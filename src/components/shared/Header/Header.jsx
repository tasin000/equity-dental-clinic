import React from 'react';
import "./Header.css";
import logo from "./../../../assets/images/logo.jpg";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';
;

const Header = () => {
    const navLinks = [
        {"id": 1,
    "to": "/", "name": "Home"},
    {"id": 2,
    "to": "/about", "name": "About"},
    {"id": 3,
    "to": "/services", "name": "Services"},
    {"id": 4,
    "to": "/blogs", "name": "Blogs"},
    {"id": 5,
    "to": "/contact", "name": "Contact"}
    ]
    const navigate = useNavigate();
    const [loggedInUser, loggedInLoading,] = useAuthState(auth);
    if (loggedInLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="container">
            <div className='navbar'>
                <div onClick={() => navigate("/")} className="nav-logo">
                    <img src={logo} alt="..." />
                </div>

                <div className="nav-links">
                    {navLinks.map(link => <NavLink key={link.id} to={link.to} className={({ isActive }) => isActive ? "active-nav-link" : ""}>{link.name}</NavLink>)}
                    {!loggedInUser ? <NavLink to="/login" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Login</NavLink> : <Link className='main-btn' onClick={() => signOut(auth)}>Log Out</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;