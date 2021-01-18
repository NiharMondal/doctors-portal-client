import React from 'react';
import './Navbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const HNavbar = () => {
  return (
    <>
      <Navbar className="wrap_navbar" expand="lg">
        <Navbar.Brand className="navbar_brand" href="/#home">Dr.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav_link" href="#home">Home</Nav.Link>
            <Link to="/appointment">
              <Nav.Link className="nav_link" href="">Appointment</Nav.Link>
            </Link>
            <Nav.Link className="nav_link" href="#service">Dental Service</Nav.Link>
            <Nav.Link className="nav_link text-white" href="#reviews">Reviews</Nav.Link>
            <Nav.Link className="nav_link text-white" href="#blog">Blog</Nav.Link>
            <Nav.Link className="nav_link text-white" href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HNavbar;