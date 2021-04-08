import React, { useEffect, useState } from 'react';
import PatientsList from '../PatientsList/PatientsList';

const Patients = () => {
  const [patients, setPatients]=useState([])
  useEffect(() => {
    fetch('https://fathomless-journey-65246.herokuapp.com/all-patietns')
      .then(res => res.json())
      .then(data => setPatients(data))
  },[])
  return (
    <div>
      <PatientsList patients={ patients}/>
    </div>
  );
};

export default Patients;