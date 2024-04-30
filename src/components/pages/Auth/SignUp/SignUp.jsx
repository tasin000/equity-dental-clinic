import React, { useState } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import error from "../../../../assets/images/icons/error.png";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import Loading from '../../../shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [createUser, signUpUser, signUpLoading, signUpError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updateUpdating, updateError] = useUpdateProfile(auth);
    const nameRegex = /[a-zA-Z]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;

    // Regex error

    
    const [signUpInfo, setSignUpInfo] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const { name, email, password, confirmPassword } = signUpInfo;
    
    const nameTest = nameRegex.test(name);
    const emailTest = emailRegex.test(email);
    const passwordTest = passwordRegex.test(password);
    const confirmPasswordTest = password === confirmPassword;
    

    const handleSignUpDetail = (event) => {
        setSignUpInfo((old) => {
            const name = event.target.name;
            const previous = old;
            previous[name] = event.target.value;
            console.log(previous);
            return (previous);
        })
        
    }

    const handleSignUp = async e => {
        console.log(name, email, password, confirmPassword);
        e.preventDefault();

        if(!nameTest){
            toast.error("Name is not valid");
            console.log("Namerror")
            return;
        }

        if(!emailTest){
            toast.error("Email is not valid");
            console.log("Emailrorr");
            return;
        }

        if(!passwordTest){
            toast.error("Password should contain at least: 6 characters, 1 lowercase letter and 1 number");
            console.log("Passwordrror");
            return;
        }

        if(!confirmPasswordTest){
            toast.error("Passwords do not match");
            return;
        }
        
        await createUser(email, password)
        await updateProfile({ displayName: name })
        const success = await sendEmailVerification();
        if (success) {
            toast.info("Verification email sent!");
        }
    }

    if (signUpUser) {
        return <Navigate to="/" replace />;
    }

    if (signUpLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Header></Header>

            <div className="container">
            <ToastContainer></ToastContainer>
                <div className="auth-form-container">
                    <div className="page-heading">
                        <p>Sign Up</p>
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className="auth-form">
                        <form onSubmit={handleSignUp}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onBlur={handleSignUpDetail} placeholder='Your name' type="text" name="name" id="name" />
                                <div className="input-error-container">
                                    {/* {nameError && <small><img src={error} alt="..." />Please enter a valid name</small>} */}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleSignUpDetail} placeholder='Type your email' type="text" name="email" id="email" />
                                <div className="input-error-container">
                                    {/* {emailError && <small><img src={error} alt="..." />Please enter a valid email</small>} */}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handleSignUpDetail} placeholder="Enter password" type="password" name="password" id="password" />
                                <div className="input-error-container">
                                    {/* {passwordError && <small><img src={error} alt="..." />Password should contain at least: <ul><li>6 characters</li><li>1 letter</li><li>1 number</li></ul></small>} */}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input onBlur={handleSignUpDetail} placeholder="Re-enter password" type="password" name="confirmPassword" id="confirmPassword" />
                                <div className="input-error-container">
                                    {/* {confirmPasswordError && <small><img src={error} alt="..." />Passwords do not match</small>} */}
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