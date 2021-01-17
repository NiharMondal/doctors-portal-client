import { Card, Grid } from '@material-ui/core';
import React from 'react';
import './TestimonialCard.css'
const TestimonialCard = ({testi}) => {
  return (
    <Grid item md={4} xs={12} sm={12}>
      <Card className="p-2">
        <p> {testi.statement}</p>
        <div className="info_wrapper">
          <div className="img">
            <img src={testi.img} alt=""/>
          </div>
          <div className="name">
            <h6>{testi.name}</h6>
            <p>{ testi.address}</p>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default TestimonialCard;