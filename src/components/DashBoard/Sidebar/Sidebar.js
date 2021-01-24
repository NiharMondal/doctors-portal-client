import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@material-ui/core';
const Sidebar = () => {
  return (
    <section className="sidebar_wrapper">
      <Link to="/doctor/dashboard">
        <div className="sidebar">
          <FontAwesomeIcon className="icon" icon={faGripHorizontal} />
          <p>DashBoard</p>
        </div>
      </Link>
      <Link to="/doctor/appointment">
        <div className="sidebar">
          <FontAwesomeIcon className="icon" icon={faCalendar} />
          <p>Appointment</p>
        </div>
      </Link>
      <Link to="/doctor/pateints">
        <div className="sidebar">
          <FontAwesomeIcon className="icon" icon={faUsers} />
          <p>Pateints</p>
        </div>
      </Link>
      <Link to="/doctor/prescription">
        <div className="sidebar">
          <FontAwesomeIcon className="icon" icon={faFileAlt} />
          <p>Prescriptions</p>
        </div>
      </Link>
      <Link to="/doctor/setting">
        <div className="sidebar">
          <FontAwesomeIcon className="icon" icon={faCog} />
          <p>Setting</p>
        </div>
      </Link>

      <div className="sidebar signout">
        <FontAwesomeIcon className="icon" icon={ faSignOutAlt}/>
        <p>Signout</p>
      </div>
     
    </section>
  );
};

export default Sidebar;