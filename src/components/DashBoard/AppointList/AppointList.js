import React from 'react';
import Table from '../Table/Table'
const AppointList = ({ appointments }) => {
  const headerStyle = {
    color:'#2be9e9'
  }
  return (
    <div >
      <h3 style={headerStyle} className="py-3">Appointments</h3>
      {
        appointments.length ? <Table appointments={appointments} /> :
          <div>
            <h4 className="lead text-center   mt-3"> No appointments for this date</h4>
          </div>
      }
    </div>
  );
};

export default AppointList;