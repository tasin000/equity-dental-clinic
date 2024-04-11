import React from 'react';
import "./ServicesLayout.css";
import Header from '../../../shared/Header/Header';
import useShuffle from '../../../../hooks/useShuffle';
import useFetch from "../../../../hooks/useFetch";
import ServiceCards from '../ServiceCards/ServiceCards';
import Loading from '../../../shared/Loading/Loading';
import Error from '../../../shared/Error/Error';

const ServicesLayout = () => {
    const [treatments, loading, error] = useFetch("treatments.json");

    useShuffle(treatments);

    return (
        <div className='services-container'>
            <div className='header-container'><Header></Header></div>

            <div className="container">
                <div className="services-container">
                    <div className='page-heading'>
                        <p>Treatments Provided by Us</p>
                    </div>
                    <ServiceCards treatmentsState={[treatments, loading, error]}></ServiceCards>
                </div>
            </div>
        </div>
    );
};

export default ServicesLayout;