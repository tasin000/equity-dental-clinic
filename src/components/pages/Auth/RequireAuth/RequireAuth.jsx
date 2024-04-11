import React from 'react';
import {useAuthState} from "react-firebase-hooks";
import auth from "./../../../../firebase/firebase.init";
import Loading from '../../../shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [loginUser, loginLoading, loginError] = useAuthState(auth);
    
    if(loginLoading){
        return <Loading></Loading>
    }

    if(loginError){
        return;
    }
    
    return children;
};

export default RequireAuth;