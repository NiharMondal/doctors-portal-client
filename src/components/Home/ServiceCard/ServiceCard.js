import { Grid } from '@material-ui/core';
import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({ service }) => {
  return (
    <Grid item md={4} xs={12} className="text-center p-3">
      <img src={service.img} alt="" style={{height:'100px', paddingBottom:'20px'}}/>
      <h5>{service.title}</h5>
      <p style={{fontFamily:'cursive'}}>{ service.description}</p>
  
    </Grid>
  );
};

export default ServiceCard;