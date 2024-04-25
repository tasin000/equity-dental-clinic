import React, { useState } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import error from "../../../../assets/images/icons/error.png";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import Loading from '../../../shared/Loading/Loading';

const SignUp = () => {
    const [createUser, signUpUser, signUpLoading, signUpError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const nameRegex = /^[a-z ,.'-]+$/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;

    let nameError, emailError, passwordError, confirmPasswordError;
    
    const [signUpInfo, setSignUpInfo] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const {name, email, password, confirmPassword} = signUpInfo;

    
    const handleSignUpDetail = (event) => {
        setSignUpInfo((old) => {
            const name = event.target.name;
            const previous = old;
            previous[name] = event.target.value;
            console.log(previous);
            return (previous);
        })
    }
    
    const handleSignUp = e => {
        e.preventDefault();
        nameError = nameRegex.test(name);
        emailError = emailRegex.test(email);
        passwordError = passwordRegex.test(password);
        confirmPasswordError = password === confirmPassword;
console.log(nameError, emailError, passwordError, confirmPasswordError);
        if(!nameError && !emailError && !passwordError && !confirmPasswordError){
            createUser(email, password);
        }
    }

    if(signUpUser){
        return <Navigate to="/" replace />;
    }

    if(signUpLoading){
        return <Loading />;
    }

    return (
        <div>
            <Header></Header>

            <div className="container">
                <div className="auth-form-container">
                    <div className="page-heading">
                    <p>Sign Up</p>
                    <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className="auth-form">
                        <form onSubmit={handleSignUp}>
                        <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onBlur={handleSignUpDetail}  placeholder='Your name' type="text" name="name" id="name" />
                                <div className="input-error-container">
                                    {nameError && <small><img src={error} alt="..." />{nameError}</small>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleSignUpDetail} placeholder='Type your email' type="text" name="email" id="email" />
                                <div className="input-error-container">
                                {emailError && <small><img src={error} alt="..." />{emailError}</small>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handleSignUpDetail} placeholder="Enter password" type="password" name="password" id="password" />
                                <div className="input-error-container">
                                {passwordError && <small><img src={error} alt="..." />{passwordError}</small>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input onBlur={handleSignUpDetail} placeholder="Re-enter password" type="password" name="confirmPassword" id="confirmPassword" />
                                <div className="input-error-container">
                                {confirmPasswordError && <small><img src={error} alt="..." />{confirmPasswordError}</small>}
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Sign Up" />
                            </div>

                            <span>Already have an account? <Link to="/login">Please Login</Link></span>
                        </form>
                    </div>


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;