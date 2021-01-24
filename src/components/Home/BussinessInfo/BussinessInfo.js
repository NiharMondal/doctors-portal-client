import React from 'react';
import { Container } from 'react-bootstrap';
import {Grid} from '@material-ui/core'
import InfoCard from '../InfoCard.js/InfoCard';
import {faClock,faMapMarker,faPhone} from '@fortawesome/free-solid-svg-icons'
const info = [
  {
    title: 'Opening Hours',
    description: 'Lorem ipsum dolor sit amet consectetur',
    icon: faClock,
    background:'primary'
  },
  {
    title: 'Visit Our Location',
    description: 'Brooklyn,NY 10036, United States',
    icon: faMapMarker,
    background: 'dark'
  },
  {
    title: 'Contact Us Now',
    description: '+178654398765',
    icon: faPhone,
    background: 'primary'
  }
]
const BussinessInfo = () => {
  return (
    <Container>
      <Grid container
        spacing={3}>
        {
          info.map(data => <InfoCard data={data} key={ data.title}/>)
        }
      </Grid>
    </Container>
   
    
  
  );
};

export default BussinessInfo;