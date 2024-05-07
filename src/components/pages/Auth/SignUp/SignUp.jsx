import React, { useState } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import Loading from '../../../shared/Loading/Loading';
import errorImg from "../../../../assets/images/icons/error.png";
import VerificationSent from '../../../shared/VerificationSent/VerificationSent';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;

    const [
        createUserWithEmailAndPassword,
        signUpUser,
        signUpLoading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, verificationSending, verificationError] = useSendEmailVerification(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const [userInfo, setUserInfo] = useState({
        name: { "value": "", "error": "" },
        email: { "value": "", "error": "" },
        password: { "value": "", "error": "" },
        confirmPassword: { "value": "", "error": "" },
    });
    const [emailSent, setEmailSent] = useState(false);

    const { name, email, password, confirmPassword } = userInfo;

    let nameError = userInfo.name.error;
    let emailError = userInfo.email.error;
    let passwordError = userInfo.password.error;
    let confirmPasswordError = userInfo.confirmPassword.error;

    const handleInputBlur = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setUserInfo(old => {
            old[inputName]["value"] = inputValue;
            return old;
        })
    }

    const handleSignUp = async e => {
        const emailValue = email.value;
        const passwordValue = password.value;
        e.preventDefault();

        if (!nameRegex.test(name.value)) {
            toast.error("Please enter your full name!");
            return;
        }

        if (!emailRegex.test(email.value)) {
            toast.error("Email is not valid!");
            return;
        }

        if (!passwordRegex.test(password.value)) {
            toast.error("Password should contain at least six characters, one letter and one digit!");
            console.log(password.value);
            return;
        }

        if (password.value !== confirmPassword.value) {
            toast.error("Passwords do not match!");
            return;
        }

        await createUserWithEmailAndPassword(emailValue, passwordValue);
        await updateProfile({ displayName: userInfo.name });
        const emailStat = await sendEmailVerification();
        if (emailStat) setEmailSent(true);
    }

    if (signUpLoading) {
        return <Loading />
    }

    if (signUpError) {
        console.error(signUpError);
    }

    if(verificationSending){
        return <h2 style={{fontFamily: "Roboto slab"}}>Sending verification email...</h2>
    }

    if (emailSent) {
        return <VerificationSent />
    }

    return (
        <div>
            <Header></Header>

            <div className="container">
                <div className="auth-form-container">
                    <div style={{margin: "0 15px"}}>
                    <div className="page-heading">
                        <p>Sign Up</p>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    </div>
                    <div style={{ fontFamily: "'Roboto slab', 'sans-serif'" }}><Toaster /></div>
                    <div className="auth-form">
                        <form onSubmit={handleSignUp}>
                            <div className="form-group">
                                <label htmlFor="name">Your Full Name</label>
                                <input placeholder='e.g. Mohammad Ali' type="text" name="name" id="name" onBlur={handleInputBlur} />
                                {nameError && <div className="input-error-container">
                                    <img src={errorImg} alt="..." />
                                    <p>{nameError}</p>
                                </div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input placeholder='e.g. ali@gmail.com' type="text" name="email" id="email" onBlur={handleInputBlur} />
                                {emailError && <div className="input-error-container">
                                    <img src={errorImg} alt="..." />
                                    <p>{emailError}</p>
                                </div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input placeholder="e.g. pG7hx8JuYE" type="password" name="password" id="password" onBlur={handleInputBlur} />
                                {passwordError && <div className="input-error-container">
                                    <img src={errorImg} alt="..." />
                                    <p>{passwordError}</p>
                                </div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input placeholder="Re-enter password" type="password" name="confirmPassword" id="confirmPassword" onBlur={handleInputBlur} />
                                {confirmPasswordError && <div className="input-error-container">
                                    <img src={errorImg} alt="..." />
                                    <p>{confirmPasswordError}</p>
                                </div>}
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