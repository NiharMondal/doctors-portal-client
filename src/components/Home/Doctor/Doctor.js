import { Grid } from '@material-ui/core';
import React from 'react';

import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Doctor = ({ doctor }) => {
  
  return (
    <Grid item md={4} xs={12}>
      <div className="doctor_avator">
        <img style={{width:'100%',height:'250px'}} src={`data:image/png;base64, ${doctor.image.img}`} alt=""/>
        <h4 className="text-center pt-2">{doctor.name}</h4>
    
        <p className="text-center"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {doctor.phone}</p>
   
      </div>
    </Grid>
  );
};

export default Doctor;