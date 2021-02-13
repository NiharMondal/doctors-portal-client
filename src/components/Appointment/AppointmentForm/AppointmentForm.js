import React from 'react';
import './AppointmentForm.css'
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';


const customStyles = {
  content: {
    width:'495px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, bookingSubject,date}) => {
  const { register, handleSubmit, errors } = useForm(); 
  
  const onSubmit = (data) => {
    data.service = bookingSubject;
    data.date = date;
    data.created = new Date()
    fetch('http://localhost:4000/addAppointment', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(success => {
        if (success) {
          closeModal()
          alert("Appointment Created Successfully.")
      }
    })
     
    
  }
  return (
    <Grid container 
      className="container">
      <Grid item md={6} xs={12} >
        <Modal
         style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>{bookingSubject}</h2>
            <p className="text-center">on { date.toDateString()}</p>
            <button className="close_btn" onClick={closeModal}>X</button>
            <br/> 
            <input name="name" ref={register({required:true})} placeholder="Your name" />
            {errors.name &&<span>Name is required</span>}
            <input name="email" ref={register({required:true})} placeholder="Email" />
            <input name="phone" ref={register({required:true})} placeholder="Phone number" />

            <input name="age" ref={register({ required: true })} placeholder="Your Age" />
            <select name="gender" ref={register({required:true})}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
         
            <input type="submit" value="Submit"/>
          </form>
        </Modal>

      </Grid>
    </Grid>
  );
};


export default AppointmentForm;