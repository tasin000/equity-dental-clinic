import React, { useState } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState({name: "", email: "", password: "", confirmPassword: ""});

    const handleSignUpDetail = (event) => {
        setSignUpInfo((old) => {
            const name = event.target.name;
            const previous = old;
            previous[name] = event.target.value;
            return (previous);
        })
    }

    const handleSignUp = e => {
        e.preventDefault();
        console.log(signUpInfo);
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
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleSignUpDetail} placeholder='Type your email' type="text" name="email" id="email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handleSignUpDetail} placeholder="Enter password" type="password" name="password" id="password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input onBlur={handleSignUpDetail} placeholder="Re-enter password" type="password" name="confirmPassword" id="confirmPassword" />
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