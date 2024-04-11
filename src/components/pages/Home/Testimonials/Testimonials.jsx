import React from 'react';
import "./Testimonials.css";
import useFetch from '../../../../hooks/useFetch';
import Testimonial from '../Testimonial/Testimonial';
import Loading from '../../../shared/Loading/Loading';
import Error from '../../../shared/Error/Error';


const Testimonials = () => {
    const [testimonials, loading, error] = useFetch("testimonials.json");

    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div className="container" style={{marginTop: "140px"}}>
            <div className='testimonials-container my-large'>
                <div className="section-heading">
                    <h3>Some of Our Delighted Patients</h3></div>
                    <div className="testimonial-cards">
                        {testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial} />)}
                    </div>
                </div>

                {error && <Error err={error}></Error>}
            </div>
    );
};

export default Testimonials;