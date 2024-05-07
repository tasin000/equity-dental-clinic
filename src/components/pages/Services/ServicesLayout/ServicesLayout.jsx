import React from 'react';
import "./ServicesLayout.css";
import Header from '../../../shared/Header/Header';
import useShuffle from '../../../../hooks/useShuffle';
import useFetch from "../../../../hooks/useFetch";
import ServiceCards from '../ServiceCards/ServiceCards';
import Footer from '../../../shared/Footer/Footer';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesLayout = () => {
    const [treatments, loading, error] = useFetch("treatments.json");

    useShuffle(treatments);

    return (
        <div className='services-container'>
            <Header></Header>

            <div className="container">
                <div className="services-container">
                    <div style={{margin: "0 15px"}}>
                    <div className='page-heading'>
                        <p>Treatments Provided by Us</p>
                        <FontAwesomeIcon icon={faUserDoctor} />
                    </div>
                    </div>
                    <ServiceCards treatmentsState={[treatments, loading, error]}></ServiceCards>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ServicesLayout;