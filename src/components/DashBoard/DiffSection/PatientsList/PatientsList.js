import React from 'react';

const headerStyle = {
  color: '#2be9e9',
  padding:'20px 0'
}
const PatientsList = ({patients}) => {
  return (
    <div className="pl-1">
      <h4 style={headerStyle}>All patients</h4>
    <table className="table table-striped pl-1">
     
      <thead className="thead-dark">
        <tr >
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {
          patients.map((patient,index) =>
            <tr>
              <td>{ index+1}</td>
              <td>{patient.name}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.email}</td>
            </tr>
          )
        }
      </tbody>
      </table>
    </div>
  );
};

export default PatientsList;