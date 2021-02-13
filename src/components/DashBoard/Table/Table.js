import React from 'react';
import './Table.css'
const Table = ({appointments}) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr >
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>

        {
          appointments.map((appointment) =>
            <tr>
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.email}</td>
            </tr>
          )
        }
      </tbody>
     
    </table>
  );
};

export default Table;