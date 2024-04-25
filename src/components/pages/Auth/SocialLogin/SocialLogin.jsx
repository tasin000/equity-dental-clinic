import React from 'react';
import "./SocialLogin.css";
import google from "./../../../../assets/images/icons/google.png";
import github from "./../../../../assets/images/icons/github.png";
import facebook from "./../../../../assets/images/icons/facebook.png";

const SocialLogin = () => {
    return (
        <div className='social-login-container'>
            <div className="or-div">
                <div></div>
                <span>or</span>
                <div></div>
            </div>

            <div className="social-login-options">
                <img src={google} alt="...." />
                <img src={github} alt="...." />
                <img src={facebook} alt="...." />
            </div>
        </div>
    );
};

export default SocialLogin;