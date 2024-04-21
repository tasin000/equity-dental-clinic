import React from 'react';
import "./Appointment.css";
import {useParams} from "react-router-dom";
import Footer from '../../shared/Footer/Footer';

const Appointment = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Appointment: {serviceId}</h1>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;