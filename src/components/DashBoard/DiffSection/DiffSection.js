import React from 'react';
import { useParams } from 'react-router-dom';
import DashAppointment from './DashAppointment/DashAppointment';
import Default from './Default/Default';
import Patients from './Patients/Patients';
import Prescription from './Prescription/Prescription';
import Settings from './Settings/Settings';

const DiffSection = ({ date, handleDateChange}) => {
  let { diffSec } = useParams();

  return (
    <div>
      { diffSec === "my-appointment" ? <DashAppointment date={date} handleDateChange={ handleDateChange}/> : diffSec === "prescription" ? <Prescription /> : diffSec === "all-patients" ? <Patients /> : diffSec === "patients" ? <Patients /> : <Settings />}     
    </div>
  );
};

export default DiffSection;