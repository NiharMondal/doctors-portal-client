import { Grid,CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctor, setDoctor] = useState([]);
  console.log(doctor);
  useEffect(() => {
    fetch('https://fathomless-journey-65246.herokuapp.com/doctors')
      .then(res => res.json())
    .then(data=>setDoctor(data))
  },[])
  return (
    <div className="doctor_section container py-5">
      <h4 style={{color:'#1cc171',textAlign:'center',paddingBottom:'20px '}}>Our Doctor</h4>
      <Grid container spacing={3} justify="center">
        {
          doctor.length?
          doctor.map(data => <Doctor doctor={ data}/>):<CircularProgress disableShrink />
        }
    </Grid>
    </div>
  );
};

export default Doctors;