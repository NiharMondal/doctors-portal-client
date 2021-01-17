import React from 'react';
import './Services.css'
import Fluoride from '../../../images/dental.png';
import tooth from '../../../images/tooth.png'
import cavity from '../../../images/tooth 1.png';
import { Grid } from '@material-ui/core';
import ServiceCard from '../ServiceCard/ServiceCard';
const services = [
  {
    img: Fluoride,
    title: 'Fluoride Treatment',
    description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia fugit temporibus voluptates eum!'
  },
  {
    img: cavity,
    title: 'Cavity Filling',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia fugit temporibus voluptates eum!'
  },
  {
    img: tooth,
    title: 'Teeth Whitening',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia fugit temporibus voluptates eum!'
  },
]
const Services = () => {
 
  return (
    <section className="container" id="services">
      <div className="heading_part">
        <h4>Our Services</h4>
        <h2>Services We Provide</h2>
      </div>
      <Grid container>
        {
          services.map(service => <ServiceCard service={service} key={ service.title}/>)
        }
     </Grid>
    </section>
  );
};

export default Services;