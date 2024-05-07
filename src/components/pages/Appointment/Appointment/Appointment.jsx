import React, { useState } from 'react';
import "./Appointment.css";
import { useParams } from "react-router-dom";
import Footer from '../../../shared/Footer/Footer';
<<<<<<< HEAD
import Header from '../../../shared/Header/Header';
import ConfirmAppointment from '../ConfirmAppointment/ConfirmAppointment';

const Appointment = () => {
    const {serviceId} = useParams();
    const [confirmed, setConfirmed] = useState(false);

    const treatments = [
        {
            "id": 1,
            "img": "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": 90,
            "name": "Root Canal Treatment",
            "desc": "A root canal treatment is a dental procedure to remove inflamed or infected pulp on the inside of the tooth which is then carefully cleaned and disinfected, then filled and sealed. Root canal treatment is designed to eliminate bacteria from the infected root canal, prevent reinfection of the tooth and save the natural tooth"
        },
        {
            "id": 2,
            "img": "https://images.unsplash.com/photo-1486049125644-f35e226a5e14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": 50,
            "name": "Scale and Polish",
            "desc": "Dental scaling and polishing are procedures that take place during a regular visit to the dentist for prophylaxis. Scaling is a non-surgical procedure of removing dental plaque and calculus on the teeth. A slow speed hand tool polishes teeth to make them shiny and smooth"
        },
        {
            "id": 3,
            "img": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": 75,
            "name": "Wisdom Tooth Removal",
            "desc": "You might need wisdom teeth removal if your wisdom teeth cause pain, grow in crooked or result in other oral health issues. Sometimes dentists recommend removing wisdom teeth preventively, before issues have a chance to develop. This common oral surgery procedure takes about an hour to complete. Full recovery takes about two weeks"
        },
        {
            "id": 4,
            "img": "https://images.unsplash.com/photo-1619987614890-4797e713fb03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": 3000,
            "name": "Braces Treatment",
            "desc": "Braces can correct a wide range of dental issues, including crooked, gapped, rotated or crowded teeth. There are several types of braces, including traditional metal braces, ceramic braces and clear aligners like Invisalign. Braces improve your smile's health, function and appearance"
        },
        {
            "id": 5,
            "img": "https://images.unsplash.com/photo-1609918438269-9a4c5f8fe3a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": 2500,
            "name": "Dental Implant",
            "desc": "Dental implant surgery is a procedure that replaces tooth roots with metal, screw like posts and replaces damaged or missing teeth with artificial teeth that look and function much like real ones. Dental implant surgery can offer a welcome alternative to dentures or bridgework that doesn't fit well and can offer an option when a lack of natural teeth roots don't allow building denture or bridgework tooth replacements"
        },
        {
            "id": 6,
            "img": "https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": 30,
            "name": "Dental Fissure Sealants",
            "desc": "The grooves and pits in your teeth are called fissures. Tooth decay is most likely to start in the fissures. Dental fissure sealants are a protective layer applied to the fissures in your teeth to prevent tooth decay.They are most commonly applied on the top of your molars (the chewing teeth at the back of your mouth)"
        }
    ];
    const treatment = treatments.find(x => x.id === Number(serviceId));
    console.log(treatment);

    if(confirmed){
        return <ConfirmAppointment />;
    }

    return (
        <div className='container'>
            <Header></Header>

            <div className="treatment-details-container">
                <div className="w-50">
                    <img src={treatment.img} alt="..." />
                </div>

                <div className="w-50">
                    <h2>{treatment.name}</h2>
                    <p>{treatment.desc}</p>
                </div>
            </div>

            <div className='appointment-confirm-btn'><button onClick={() => setConfirmed(true)} >Confirm Appointment</button></div>

=======
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

>>>>>>> df3676e027d7e329f9f68b522c2f3b4c23b85574
            <Footer></Footer>
        </div>
    );
};

export default Appointment;