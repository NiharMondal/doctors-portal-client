import React from 'react';
import './AppointmentHeader.css'
import chair from '../../../images/chair.png'
import {Container,Row, Col } from 'react-bootstrap';
import { Card } from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
 
  return (
    <Container className="body_wrapper">
      <Row className="content">
        <Col md={6} className="">
          <Card className="card_wrapper">
            <Calendar className="react_calender"
              onChange={handleDateChange}
              value={new Date()}
            />
          </Card>
        </Col>

        <Col md={6} className="img_section">
          <img src={chair} style={{width:'100%'}} alt=""/>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentHeader;