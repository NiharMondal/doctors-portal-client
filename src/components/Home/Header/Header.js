import React from 'react';
import './Header.css'
import {Navbar, Nav}from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand className="header" href="#home">Dr.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav_wrapper">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to="/appointment">
              <Nav.Link className="appointment" href="#appointment">Appointment</Nav.Link>
            </Link>
            <Nav.Link href="#services">Dental Services</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link
              className="contact_style"
              href="#contact">Contact Us</Nav.Link>
          </Nav>   
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;