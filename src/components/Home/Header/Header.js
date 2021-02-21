import React from 'react';
import './Header.css'
import {Navbar, Nav}from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
const Header = () => {
  return (
    <Grid container>
      <Grid item md={12} sm={12} xs={12}>
   
      <Navbar expand="lg">
        <Link to="/">
        <Navbar.Brand className="header" href="/">Dr.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav_wrapper">
            <Link to="/" className="nav_link">
            <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link className="nav_link" to="/appointment">
              <Nav.Link href="/appointment">Appointment</Nav.Link>
            </Link>
            <Link className="nav_link" to="/dashboard">
            <Nav.Link href="/dashboard"> Dashboard</Nav.Link>
            </Link>
            <Link className="nav_link" to="/admin">
            <Nav.Link href="/admin">Admin</Nav.Link>
            </Link>
            <Nav.Link href="#blog">Blogs</Nav.Link>
            <Nav.Link
              className="contact_style"
              href="#contact">Contact Us</Nav.Link>
          </Nav>   
        </Navbar.Collapse>
        </Navbar>   
      </Grid>
    </Grid>
  );
};

export default Header;