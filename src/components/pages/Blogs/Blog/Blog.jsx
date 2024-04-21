import React from 'react';
import "./Blog.css";

const Blog = ({ blog }) => {
    const { title, desc } = blog;
    return (
        <div className='blog-card'>
            <h2 className='blog-title'>{title}</h2>
            <p className='blog-desc'>{desc.join(" ")}</p>
        </div>
    );
};

export default Blog;