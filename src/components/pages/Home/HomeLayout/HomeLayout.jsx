import React from 'react';
import "./HomeLayout.css";
import Header from '../../../shared/Header/Header';
import homeBannerImg from "../../../../assets/images/Home/home_banner.png";
import Banner from "../../../shared/Banner/Banner";
import ServiceCards from "../../../pages/Services/ServiceCards/ServiceCards";
import useFetch from "../../../../hooks/useFetch";
import useShuffle from "../../../../hooks/useShuffle";
import { useNavigate } from "react-router-dom";
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../../shared/Footer/Footer';


const HomeLayout = () => {
    const navigate = useNavigate();
    const [treatments, loading, error] = useFetch("treatments.json");
    useShuffle(treatments);
    const sliced_services = treatments.slice(0, 3);
    const homeBanner = {
        mainTitle: "Better Dentistry        ",
        subTitle: "Better Life Through        ",
        desc: "Join Equity Dental Clinic to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.",
        img: homeBannerImg,
    }
    return (
        <div className='home-container'>
            <div className="banner">
                <Header></Header>
                <Banner contents={homeBanner}>
                    <div className="banner-btn-group">
                        <button onClick={() => navigate("/services")} className="main-btn">
                            Appointment
                        </button>
                        <button onClick={() => navigate("/about")} className="main-btn" style={{ marginLeft: "20px" }}>
                            Learn More
                        </button>
                    </div>

                </Banner>
            </div>

            <div className="container">
                <div className="my-large">
                    <div className="section-heading">
                        <h3>Treatments We Provide</h3>
                    </div>
                    <ServiceCards treatmentsState={[sliced_services, loading, error]}></ServiceCards>

                    <div onClick={() => navigate('/services')} className="main-btn services-view-all-btn">
                        View All Treatments
                    </div>
                </div>
            </div>

            <Testimonials></Testimonials>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;