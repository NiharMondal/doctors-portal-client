import { Card, Grid } from '@material-ui/core';
import React from 'react';
import './BlogPosts.css'
const BlogPost = ({data}) => {
    const {title, description, author, authorImg , date} = data;
    return (
        <Grid item md={4} xs={12} className="pt-5 ">
            <Card className='card_part'>
                
                 <div className="d-flex combine">
                    <img src={authorImg} alt="" />
                    <div className="text_part">
                         <h6>{author}</h6>
                          <p>{date}</p>
                     </div>
                </div>
                <div className="down_part">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                  
            
            </Card>
        </Grid>
    );
};

export default BlogPost;