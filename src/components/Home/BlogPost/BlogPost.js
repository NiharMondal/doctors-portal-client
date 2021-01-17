import { Card, Grid } from '@material-ui/core';
import React from 'react';
import './BlogPosts.css'
const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <Grid item md={4} xs={12} sm={12} >
            <Card className="p-2 card_wrapper">
                <div className="upper_part">
                    <div className="img-part">
                        <img src={authorImg} alt="" />
                    </div>
                    <div className="author-part">
                        <h6>{author}</h6>
                        <p>{ date}</p>
                    </div>
                </div>
                <h5>{title}</h5>
                <p>{ description}</p>
            </Card>
        </Grid>
    );
};

export default BlogPost;