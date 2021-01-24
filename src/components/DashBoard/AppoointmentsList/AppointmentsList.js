import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList'

const AppointmentsList = ({ appointments }) => {  
  
  return (
    <div>
      <h3 className="pt-5 text-center" style={{ color:'#19d3ae'}}> Appointments</h3>
      {
        appointments.length ?
          <AppointmentShortList
            appointments={appointments} ></AppointmentShortList>
          :
          <div className="p-1">
            <h4 className=" lead text-center">No Appointments for this Date</h4>
          </div>
      }
    </div>
  );
};

export default AppointmentsList;