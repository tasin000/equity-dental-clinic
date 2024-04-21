import React from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    return (
        <div>
            <Header></Header>

            <div className="auth-form-container">
                <div className="page-heading">
                    <p>Sign Up</p>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;