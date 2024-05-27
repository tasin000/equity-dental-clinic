import React from 'react';
import "./ServiceCards.css";
import Service from '../Service/Service';
import Loading from '../../../shared/Loading/Loading';
import Error from '../../../shared/Error/Error';

const ServiceCards = ({ treatmentsState }) => {
    const [treatments, loading, error] = treatmentsState;
    if (loading) {
        return <Loading></Loading>;
    }

    const treatment = treatments.find(x => x.id === 1);

    return (
        <div className="service-cards">
            {treatments.map(treatment => <Service key={treatment.id} treatment={treatment} />)}

            {error && <Error err={error}></Error>}
        </div>
    );
};

export default ServiceCards;