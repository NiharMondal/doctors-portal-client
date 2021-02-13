import { Card, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../../App';
import AppointList from '../../AppointList/AppointList';

const headerStyle = {
  color: '#2be9e9'
}

const DashAppointment = () => {
  const [loggedIn, setLoggedIn]= useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDateChange = (date) => {
    setSelectedDate(date)
  };
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/appointments-list', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({date: selectedDate, email: loggedIn.email })
    })
      .then(res => res.json())
      .then(data => setAppointments(data))
  },[selectedDate])

  return (
    <Grid container spacing={2}>
      <Grid item md={5} >
        <Card className="p-2">
          <h1 className="pb-4" style={headerStyle}>Pick a date</h1>
          <Calendar className="react_calender"
            onChange={handleDateChange}
            value={new Date()}
          />
        </Card>
      </Grid>
      <Grid item md={7} xs={12}>
        <AppointList appointments={ appointments}/>
      </Grid>
    </Grid>
  );
};

export default DashAppointment;