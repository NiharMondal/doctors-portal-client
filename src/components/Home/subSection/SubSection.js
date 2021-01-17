import React from 'react';
import { Grid } from '@material-ui/core'
import dentalCare from '../../../images/dentalCare.png'
import './SubSection.css'
const SubSection = () => {
  return (
    <Grid container className="container pt-5">
      <Grid item md={6}>
        <img src={dentalCare} alt="" style={{ width:'80%'}}/>
      </Grid>
      <Grid item md={6} style={{ display: 'flex', alignItems: 'center' }}>
        <div className="description">
        <h1 >Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className="py-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, velit officiis illo veritatis accusantium mollitia reprehenderit unde autem aspernatur consectetur necessitatibus dolorum eum ad assumenda? Cum repellat sequi, magni tempore laudantium cumque ducimus excepturi nobis qui! Quia consequatur dolorum hic officia nulla nemo explicabo, temporibus quam, impedit necessitatibus quo voluptates ex quod, esse quas soluta maiores adipisci maxime debitis facere. Corrupti minus neque blanditiis eum doloribus, inventore ducimus molestias, officiis possimus rem mollitia officia aliquam exercitationem tempore porro libero, perspiciatis aspernatur fugit quae ex recusandae earum. Alias enim minus nemo.
          </p>
          <button className="learn_btn">Learn More</button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SubSection;