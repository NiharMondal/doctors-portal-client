import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Admin.css';
const Admin = () => {
  const [loggedIn, seLoggedIn] = useContext(UserContext);
  const [admin, setAddmin] = useState(false);
  const [info, setInfo] = useState({});
  const [file,setFile]=useState(null)
  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile)
  };
  useEffect(() => {
    fetch('http://localhost:4000/is-admin', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedIn.email })
    })
      .then(res => res.json())
      .then(data => setAddmin(data));

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('phone', info.phone);

    fetch("http://localhost:4000/add-doctor", {
      method: "post",
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))

      .catch(error => {
        console.error(error)
      })
      e.target.reset()
  }
  return (

    <Grid container className='container '>
      {admin ?
        <Grid item md={12} xs={12}>
          <h3 className="mb-5 pt-5"> <Link className="home " to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></h3>
          <h2>Add Doctor</h2>
          <Card className="p-2">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label> Doctor's Name</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                type="text"
                name="name"
                placeholder="Enter doctor's name"
              />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
              <Form.Control

                onBlur={handleBlur}
                type="email"
                name="email"
                placeholder="Enter email"
              />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                type="text"
                name="phone"
                placeholder="Phone number"
              />
              </Form.Group>
              <Form.Group>
                <Form.Label>Choose a photo</Form.Label>
              <Form.Control
                onChange={handleFileChange}
                type="file"
                name="file"
                placeholder="Choose a photo"
              />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Grid>
        : <Grid item md={12} xs={12} sm={12} className="content_wrapper">
          <Card className="notice">
            <h2>Sorry You are not an <span>Admin</span>!</h2>
          </Card>
        </Grid>
        } 
    </Grid>
  );
};

export default Admin;