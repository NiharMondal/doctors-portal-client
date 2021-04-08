import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import Sidebar from '../DashBoard/Sidebar/Sidebar'
const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);


  const handleBlur = (e) => {
    const newInfo = { ...info }
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('phone', info.phone);

    fetch("https://fathomless-journey-65246.herokuapp.com/add-doctor", {
      method: 'post',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setInfo(data);
      });
  }

  return (
    <Grid container className="container">
      <Grid item md={3} xs={12}>
        <Sidebar/>
      </Grid>
      <Grid item md={9} xs={12} className="pl-4">
        
        <h4 className="py-2">Add Doctor</h4>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onBlur={handleBlur} type="email" name="email" class="form-control" placeholder="Enter email"/>
           </div>
            <div class="form-group">
            <label for="exampleInputName1">Name</label>
              <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name"/>
             </div>
            <div class="form-group">
            <label for="exampleInputName1">Phone Number</label>
              <input onBlur={handleBlur} type="text" class="form-control" name="phone" placeholder="Phone number"/>
             </div>
            <div class="form-group">
              <label for="exampleInputPhoto1">Upload image</label>
              <input onChange={handleFileChange} type="file" class="form-control" name="uploadImg" placeholder="Upload image"/>
             </div>
             
                <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </Grid>
    </Grid>
  );
};

export default AddDoctor;