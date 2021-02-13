import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './MBody.css'
import chair from '../../../images/chair.png'
import {useHistory} from 'react-router-dom'
const MBody = () => {
  const history = useHistory();
  const getAppointment = () => {
    history.push("/appointment")
  }
  return (
    <Container className="body_wrapper">
      <Row className="content">
        <Col md={6} className="text_section">
          <h1>Your New Smile <br /> Starts Here</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo quos consequuntur ducimus corrupti eaque repellat libero debitis nostrum sint similique dolorem nam hic aspernatur illum commodi quidem non quibusdam, et maxime dolorum cupiditate quis iure placeat? Reprehenderit inventore quo maxime impedit, vitae veritatis tempore in voluptatibus sed, quod tempora!</p>
          <button
            onClick={getAppointment}
          className="appointment_btn">Get Appointment</button>
        </Col>
     
        <Col md={6} className="img_section">
          <img src={chair} alt=""/>
        </Col>
      </Row>
    </Container>
  );
};

export default MBody;