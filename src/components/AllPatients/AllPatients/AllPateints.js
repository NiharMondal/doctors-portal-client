import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';
import PatientsTable from '../PatientsTable/PatientsTable';

const AllPateints = () => {
  const [appointments, setAppointments] = useState([])
  
  useEffect(() => {
    fetch('https://fathomless-journey-65246.herokuapp.com/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data))
  },[])
  return (
    <Grid container className="container">
      <Grid item md={3} xs={12}>
        <Sidebar/>
      </Grid>
      <Grid item md={9} xs={12} className="pt-3 pl-3">
        <h4 style={{ color: '#1cc7c1' }}>All Patients</h4>
        <PatientsTable appointments={ appointments}/>
      </Grid>
    </Grid>
  );
};

export default AllPateints;