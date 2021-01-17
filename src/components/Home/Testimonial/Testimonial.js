import { Grid } from '@material-ui/core';
import React from 'react';
import './Testimonial.css'
import henry from '../../../images/avator1.png';
import antony from '../../../images/avator2.png';
import ema from '../../../images/avator3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const patientsRef = [
  {
    statement: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam repellendus doloremque maxime! Cupiditate delectus ullam in, dolorum reiciendis deleniti a. Dignissimos, non maxime! Ipsum impedit id quod.",
    img: henry,
    name: "Winson Henry",
    address:'California'
  },
  {
    statement: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam repellendus doloremque maxime! Cupiditate delectus ullam in, dolorum reiciendis deleniti a. Dignissimos, non maxime! Ipsum impedit id quod.",
    img: antony,
    name: "Rose",
    address: 'Texas'
  },
  {
    statement: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam repellendus doloremque maxime! Cupiditate delectus ullam in, dolorum reiciendis deleniti a. Dignissimos, non maxime! Ipsum impedit id quod.",
    img: ema,
    name: "Ema Downey",
    address: 'Washington'
  },
]

const Testimonial = () => {
  return (
    <section className="container testimonial_part " id="reviews">
      <div className="outer_part">
        <h5 className="pt-5">Testimonial</h5>
        <h2>What's Our Patients <br />Says</h2>
      </div>
      <Grid container spacing={3}>
          {
          patientsRef.map(testi => <TestimonialCard testi={testi} key={ testi.name}/>)
          }
        </Grid>
    </section>
  );
};

export default Testimonial;