import React from 'react';
import "./ServiceCards.css";
import Service from '../Service/Service';

const ServiceCards = ({treatments}) => {
    return (
        <div className="service-cards">
                        {treatments.map(treatment => <Service key={treatment.id} treatment={treatment} />)}
                    </div>
    );
};

export default ServiceCards;