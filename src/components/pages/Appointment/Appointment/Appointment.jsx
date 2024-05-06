import React, { useState } from 'react';
import "./Appointment.css";
import { useParams } from "react-router-dom";
import Footer from '../../../shared/Footer/Footer';
import useFetch from '../../../../hooks/useFetch';
import Loading from '../../../shared/Loading/Loading';
import ConfirmAppointment from '../ConfirmAppointment/ConfirmAppointment';
import Header from '../../../shared/Header/Header';

const Appointment = () => {
    const [treatments, loading] = useFetch("treatments.json");
    console.log(treatments);
    return (
        <div className='appointment-container'>
            <Header></Header>

            <div className="container">

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;