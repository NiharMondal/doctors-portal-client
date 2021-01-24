import { Grid } from '@material-ui/core';
import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'
const MakeAppointment = () => {
  return (
    <Grid container
      className="appointment_section container">
      <Grid item md={6} xs={12}
        className="appointment_img">
        <img src={doctor} alt="" />
      </Grid>
      <Grid item md={6} xs={12} className="appointment_text">
        <h6 >APPOINTMENT</h6>
        <h2 className="text-white">Make an Appointment <br /> Today
        </h2>
        <p className="text-white py-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem quisquam, quos ipsam laboriosam laborum?
        </p>
        <button className="appoint_btn">Learn More</button>
      </Grid>
    </Grid>
  );
};

export default MakeAppointment;