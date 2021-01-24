import React, { useState } from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedDate]=useState(new Date())
  const handleDateChange = date => {
   setSelectedDate(date)

  }
  return (
    <div>
      <Header />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment date={ selectedDate}/>
     <Footer/>
    </div>
  );
};

export default Appointment;