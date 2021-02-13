import React, { useEffect, useState } from 'react';
import PatientsList from '../PatientsList/PatientsList';

const Patients = () => {
  const [patients, setPatients]=useState([])
  useEffect(() => {
    fetch('http://localhost:4000/all-patietns')
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