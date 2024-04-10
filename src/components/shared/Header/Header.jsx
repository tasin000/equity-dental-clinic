import React from 'react';
import "./Header.css";
import logo from "./../../../assets/images/logo.jpg";
import { Link, useNavigate } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";;

const Header = () => {
    const navigate = useNavigate();
    const [loggedInUser, loggedInLoading,] = useAuthState(auth);
    if(loggedInLoading){
        return;
    }
    return (
        <div className="container">
            <div className='navbar'>
            <div onClick={() => navigate("/")} className="nav-logo">
                <img src={logo} alt="..." />
            </div>

            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/contact'>Contact</Link>
                {!loggedInUser ? <Link to='/login'>Login</Link> : loggedInUser ? <Link to='/login'>Login</Link> : <></>}
            </div>
        </div>
        </div>
    );
};

export default Header;