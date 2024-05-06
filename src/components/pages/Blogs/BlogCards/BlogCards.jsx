import React from 'react';
import "./BlogCards.css";
import Blog from '../Blog/Blog';
import useFetch from '../../../../hooks/useFetch';
import Loading from '../../../shared/Loading/Loading';

const BlogCards = () => {
    const [blogs, blogsLoading, error] = useFetch("blogs.json");

    if(blogsLoading) return <Loading></Loading>;

    return (
            <div className="container">
                <div className="blog-cards-container">
                {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>
            </div>
    );
};

export default BlogCards;