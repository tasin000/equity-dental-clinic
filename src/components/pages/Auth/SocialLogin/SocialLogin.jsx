import React from 'react';
import "./SocialLogin.css";
import google from "./../../../../assets/images/icons/google.png";
import github from "./../../../../assets/images/icons/github.png";
import facebook from "./../../../../assets/images/icons/facebook.png";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import errorImg from "../../../../assets/images/icons/error.png";
import Loading from '../../../shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const location = useLocation();
    const from = location?.state?.from?.pathname;

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    if(googleUser || githubUser || facebookUser){
        return <Navigate to={from} replace />
    }

    return (
        <div className='social-login-container'>
            <div className="or-div">
                <div></div>
                <span>or</span>
                <div></div>
            </div>

            <div className="social-login-options">
<<<<<<< HEAD
                <img onClick={() => {
                    signInWithGoogle();
                }} src={google} alt="...." />
                <img onClick={() => {
                    signInWithGithub();
                }} src={github} alt="...." />
                <img onClick={() => {
                    signInWithFacebook();
                }} src={facebook} alt="...." />
=======
                {googleLoading ? <Loading /> : <img onClick={() => {
                    signInWithGoogle();
                }} src={google} alt="...." />}
                {githubLoading ? <Loading /> : <img onClick={() => {
                    signInWithGithub();
                }} src={github} alt="...." />}
                {facebookLoading ? <Loading /> : <img onClick={() => {
                    signInWithFacebook();
                }} src={facebook} alt="...." />}
>>>>>>> df3676e027d7e329f9f68b522c2f3b4c23b85574
            </div>

            {(googleError || githubError || facebookError) && <div className="input-error-container">
                <img src={errorImg} alt="..." />
                <p>{googleError || githubError || facebookError}</p>
            </div>}
        </div>
    );
};

export default SocialLogin;