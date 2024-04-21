import React from 'react';
import "./Banner.css";
import homeBannerImg from "./../../../assets/images/Home/home_banner.png";
import otherBannerImg from "../../../assets/images/banner_img.png";
import { useLocation } from "react-router-dom";

const Banner = ({ contents, children }) => {
    const location = useLocation();
    return (
        <div className="container">
            <div className='banner-contents'>
                <div className="w-50">
                    <h2>{contents?.subTitle}</h2>
                    <h1>{contents?.mainTitle}</h1>
                    <p>{contents?.desc}</p>

                    {children}
                </div>
                <div className="w-50">
                    <div className='banner-img'>
                        <img src={location?.pathname === "/" ? homeBannerImg : otherBannerImg} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;