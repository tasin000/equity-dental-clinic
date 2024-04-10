import React from 'react';
import "./HomeLayout.css";
import Header from '../../../shared/Header/Header';
import homeBannerImg from "../../../../assets/images/home/home_banner.png";
import Banner from "../../../shared/Banner/Banner";

const HomeLayout = () => {
    const homeBanner = {
        mainTitle: "Better Dentistry        ",
        subTitle: "Better Life Through        ",
        desc: "Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.",
        img: homeBannerImg,
    }
    return (
        <div className='home-container'>
            <div className="banner">
                <Header></Header>
                <Banner contents={homeBanner}>
                    <div className="banner-btn-group">
                        <button className="main-btn">
                            Appointment
                        </button>
                        <button className="main-btn" style={{marginLeft: "20px"}}>
                            Learn More
                        </button>
                    </div>

                </Banner>
            </div>

            
        </div>
    );
};

export default HomeLayout;