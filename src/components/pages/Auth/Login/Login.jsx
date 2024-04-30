import React, { useRef } from 'react';
import "./Login.css";
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [userLogInWithEmailAndPassword, loginUser, loginLoading, loginError] = useSignInWithEmailAndPassword();
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const email = emailRef.current.valueOf;
    const password = passwordRef.current.valueOf;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailTest = emailRegex.test(email);

    const handleLogin = e => {
        e.preventDefault();
        if (!emailTest) { toast.error("Email is invalid"); return; }

        userLogInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <Header></Header>

            <div className="container">
                <ToastContainer />
                <div className="auth-form-container">
                    <div className="page-heading">
                        <p>Login</p>
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </div>

                    <div className="auth-form">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input ref={emailRef} placeholder='Type your email' type="text" name="email" id="email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input ref={passwordRef} placeholder="Type your password" type="password" name="password" id="password" />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Login" />
                            </div>

                            <div className="user-quota-container">
                                <div>
                                    <p><Link to="/sign_up">Sign Up</Link></p>
                                </div>

                                <div>
                                    <p><Link>Forgot Password</Link></p>
                                </div>
                            </div>
                        </form>

                        <SocialLogin></SocialLogin>
                    </div>


                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;