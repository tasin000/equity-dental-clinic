import React from 'react';
import "./Appointment.css";
import {useParams} from "react-router-dom";

const Appointment = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Appointment: {serviceId}</h1>
        </div>
    );
};

export default Appointment;