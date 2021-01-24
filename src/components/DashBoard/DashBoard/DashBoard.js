import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AppointmentsList from '../AppoointmentsList/AppointmentsList';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
const DashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointmentList, setAppointmentList]=useState([])
  const handleDateChange = date => {
    setSelectedDate(date)
  }

  useEffect(() => {

    fetch('http://localhost:4000/appointments-list', {
      method: 'post',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate })

    })
      .then(res => res.json())
      .then(data => setAppointmentList(data))
  },[selectedDate])
  return (
    <Grid container className="container">
      <Grid item md={3} xs={12}>
        <Sidebar/>
      </Grid>
      <Grid item md={5} className="px-1">
        <h3 className="px-2 py-5" style={{ color:'#19d3ae'}}>Select Date and check appointment</h3>
        <Calendar className="react_calender"
          onChange={handleDateChange}
          value={new Date()}
        />
      </Grid>
      <Grid item md={4}>
        <AppointmentsList appointments={ appointmentList}/>
      </Grid>
    </Grid>
  );
};

export default DashBoard;