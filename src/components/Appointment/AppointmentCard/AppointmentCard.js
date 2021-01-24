import { Card, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './AppointmentCard.css'
const AppointmentCard = ({ data,date }) => {
  const { subject, visitingHour, totalSpace } = data;

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Grid item md={4} xs={12} className="text-center pt-5">
      <Card className='card-wrapper'>
        <h4 >{subject}</h4>
        <h6>{visitingHour}</h6>
        <p className="text-secondary"> {totalSpace} space available</p>
        <button onClick={openModal}>Book Appointment</button>
        <AppointmentForm bookingSubject={subject} modalIsOpen={modalIsOpen} closeModal={closeModal}
          date={ date}/>
      </Card>
     
    </Grid>
  );
};

export default AppointmentCard;