import React from 'react';
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
    const { name, ratings, review } = testimonial;
    return (
        <div className='testimonial-card'>
            <div className="testimonial-patient">
                <p>{name}</p>
                <p>{ratings} ⭐</p>
            </div>
            <div className="testimonial-review">
                {review}
            </div>
        </div>
    );
};

export default Testimonial;