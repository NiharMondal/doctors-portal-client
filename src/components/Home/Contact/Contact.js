import { Grid } from '@material-ui/core';
import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <Grid container id="contact"
      className="container">
      <Grid item md={12} xs={12} sm={ 12}className="contact_wrapper">
        <h5>Contact Us</h5>
        <h3>Always Connect With Us</h3>
        <br/>
        <form action="">
          <input type="text" placeholder="Email Address" required /><br />
          <input type="text" placeholder="Subject" required /> <br />
          <textarea rows="3" cols="55" name="comment"  required>
            Your Message Here... </textarea>     <br />

          <button type="submit" className="submit_btn"> SUBMIT</button>
        </form>
       
      </Grid>
    </Grid>
  );
};

export default Contact;