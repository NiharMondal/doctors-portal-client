import { Grid } from '@material-ui/core';
import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import './BookAppointment.css'
const BookAppointment = ({ date }) => {
  const bookingData = [
    {
      id: 1,
      subject: 'Teeth Orthodontics',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: 10
    },
    {
      id: 2,
      subject: 'Cosmetic Dentistry',
      visitingHour: '10:50 AM - 11:30 AM',
      totalSpace: 10
    },
    {
      id: 3,
      subject: 'Teeth Cleaning',
      visitingHour: '5:00 AM - 6:00 PM',
      totalSpace: 10
    },
    {
      id: 4,
      subject: 'Cavity Protection',
      visitingHour: '7:00 AM - 8:00 AM',
      totalSpace: 10
    },
    {
      id: 5,
      subject: 'Teeth Orthodontics',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: 10
    },
    {
      id: 6,
      subject: 'Teeth Orthodontics',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: 10
    },

  ]
  return (
    <section className="container">
      <h2 className="header pb-3">Available Appointments on {date.toDateString()}</h2>
      <Grid container spacing={4}>
        {
          bookingData.map(data => <AppointmentCard data={data}
            date={date}
            key={data.id} />)
        }
      </Grid>
    </section>
  );
};

export default BookAppointment;