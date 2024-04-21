import React from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    
    return (
        <div>
            <Header></Header>

            <div className="auth-form-container">
                <div className="page-heading">
                    <p>Login</p>
                    <FontAwesomeIcon icon={faRightToBracket} />
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;