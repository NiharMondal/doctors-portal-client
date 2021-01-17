import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/avator1.png';
import './Blogs.css'
import { Grid } from '@material-ui/core';


const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5" id="blog">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
                <Grid container spacing={3}className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </Grid>
           </div>
       </section>
    );
};

export default Blogs;