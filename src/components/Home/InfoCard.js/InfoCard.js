import { Grid } from '@material-ui/core';
import React from 'react';
import './InfoCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const InfoCard = ({ data }) => {

  
  return (
   
    <Grid item md={4} xs={12}>
      <div className={`info_wrapper text-white info_${data.background}`}>
        <div className="icon_part">
          <FontAwesomeIcon className="just_icon" icon={ data.icon}/>
        </div>
        <div className="info_part">
          <h6>{data.title}</h6>
          <p> {data.description} </p>
        </div>
      

      </div>
       
    </Grid>
      

  );
};

export default InfoCard;