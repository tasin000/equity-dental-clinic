import React from 'react';
import "./Testimonials.css";
import useFetch from '../../../../hooks/useFetch';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonials = useFetch("testimonials.json");
    return (
        <div className="container">
            <div className='testimonials-container my-large'>
                <div className="section-heading">
                    <h3>Some of Our Delighted Patients</h3></div>
                    <div className="testimonial-cards">
                        {testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial} />)}
                    </div>
                </div>
            </div>
    );
};

export default Testimonials;