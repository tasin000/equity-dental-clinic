import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate, useLocation} from "react-router-dom";
import auth from "./../../../../firebase/firebase.init";
import Loading from '../../../shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [loginUser, loginLoading, loginError] = useAuthState(auth);
    
    if(loginLoading){
        return <Loading></Loading>;
    }

    if(loginError){
        return;
    }

    if(!loginUser){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    
    return children;
};

export default RequireAuth;