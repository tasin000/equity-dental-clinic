import React from 'react';
import "./Service.css";
import {useNavigate} from "react-router-dom";

const Service = ({treatment}) => {
    const navigate = useNavigate();
    const {id, img, name, price, desc} = treatment;
    return (
        <div className='service-card'>
            <div className='service-card-img'>
            <img src={img} alt="..." />
            </div>

            <div className='service-card-contents'>
                <div className="service-card-title">
                    {name}
                </div>
                <h3>$ {price}</h3>
                <p>{desc?.length > 80 ? desc.slice(0, 80) + "...": desc}</p>
                <div>
                <p className='appoint-link' onClick={() => navigate(`/services/${id}`)}>Appoint Now</p>
                </div>
                
            </div>
        </div>
    );
};

export default Service;