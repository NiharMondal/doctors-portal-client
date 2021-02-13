import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendar, faUsers, faFileAlt, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Sidebar = ({ url }) => {
  const [loggedIn, seLoggedIn] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    fetch('http://localhost:4000/is-doctor', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedIn.email })
    })
      .then(res => res.json())
      .then(data => setIsDoctor(data));
    
  },[])
  return (
    
    <ul className="list_wrapper">
      <li className="mb-5"> <Link className="home" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
      
      { isDoctor && <li> <Link className="link" to={`${url}/all-appointment`}><FontAwesomeIcon className="faIcon" icon={faGripHorizontal} />Dashboard </Link></li>}
      
      <li> <Link className="link" to={`${url}/my-appointment`}><FontAwesomeIcon icon={faCalendar} className="faIcon" />Appointment </Link></li>
     { isDoctor && <div>
        <li> <Link className="link" to={`${url}/all-patients`}><FontAwesomeIcon icon={faUsers} className="faIcon" />Patients </Link></li>
        <li> <Link className="link" to={`${url}/prescription`}><FontAwesomeIcon icon={faFileAlt} className="faIcon" />Prescription </Link></li>
        <li> <Link className="link" to={`${url}/setting`}><FontAwesomeIcon icon={faCog} className="faIcon" />Setting </Link></li>
      </div>}
    </ul>
  );
};

export default Sidebar;