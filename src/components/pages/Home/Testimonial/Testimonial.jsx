import React from 'react';
import "./Testimonial.css";
import { StarIcon } from '@heroicons/react/24/solid'


const Testimonial = ({ testimonial }) => {
    const { name, ratings, review } = testimonial;
    return (
        <div className='testimonial-card'>
            <div className="testimonial-patient">
                <p>{name}</p>
                <div className='testimonial-rating'>
                    <p>{ratings} </p>
                    <StarIcon />
                </div>

            </div>
            <div className="testimonial-review">
                {review}
            </div>
        </div>
    );
};

export default Testimonial;