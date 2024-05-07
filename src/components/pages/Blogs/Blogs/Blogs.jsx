import React from 'react';
import "./Blogs.css";
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import BlogCards from '../BlogCards/BlogCards';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../../../hooks/useFetch';
import Loading from '../../../shared/Loading/Loading';

const Blogs = () => {
    const [treatments, loading, error] = useFetch("treatments.json");
    
    if(loading){
        return <Loading />
    }

    if(error){
        console.error(error);
    }
    return (
        <div>
            <Header></Header>
            <div className="blogs-container">
                <div style={{margin: "0 15px"}}>
                <div className="page-heading">
                    <p>Discover Blogs</p>
                    <FontAwesomeIcon icon={faNewspaper} />
                </div>
                </div>

                <BlogCards></BlogCards>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;