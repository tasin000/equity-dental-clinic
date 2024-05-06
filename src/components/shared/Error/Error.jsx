
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Error = ({ err }) => {

    if (err) toast(err);
    return (
        <Toaster />
    );
};

export default Error;