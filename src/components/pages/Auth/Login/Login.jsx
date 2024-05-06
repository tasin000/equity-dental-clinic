import React, { useRef } from 'react';
import "./Login.css";
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useLocation } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../shared/Loading/Loading';

const Login = () => {
    const location = useLocation();
    const from = location?.state?.from?.pathname;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const handleLogin = e => {
        e.preventDefault();

        if (!emailRegex.test(email)) {
            toast.error("Email is not valid!");
            return;
        }

        signInWithEmailAndPassword(email, password);
    }

    if(loading){
        return <Loading />
    }

    if (error) {
        console.error(error);
    }

    if (user) {
        return <Navigate to={from} replace />
    }

    return (
        <div>
            <Header></Header>

            <div className="container">
                <div style={{fontFamily: "Roboto slab"}}><Toaster /></div>
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
                                    <p><Link onClick={async () => { if(!emailRegex.test(email)){toast('Please enter valid email to send reset link!', {
  icon: '⚠️',
}); return;}; const resetEmail = await sendPasswordResetEmail(email); if (resetEmail) { toast.success("Password reset email sent!") } }}>Forgot Password</Link></p>
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