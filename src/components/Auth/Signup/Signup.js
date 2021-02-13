import { Card, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import firebaseConfig from '../firebase.config';
import './Signup.css'
import firebase from 'firebase/app';
import "firebase/auth"
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Singup = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  let location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  const [verifyMessage, setVerifyMessage] = useState(false)
  const [confirmPass, setConfirmPass] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    conPass: '',
    error: '',
    success: false
  })
  const handleChange = (e) => {
    const newUserInfo = { ...newUser }
    newUserInfo[e.target.name] = e.target.value;
    setNewUser(newUserInfo);
  }
  const handleSignup = (e) => {
    e.preventDefault()
    if (newUser.password === newUser.conPass) {
      firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(() => {
          const newUserInfo = { ...newUser }
          newUserInfo.success = true;
          newUserInfo.error = "";
          setNewUser(newUserInfo);
          const currentUser = firebase.auth().currentUser;
          currentUser.updateProfile({
            displayName: newUser.fullName,
          })
          currentUser.sendEmailVerification()
          setVerifyMessage(true)
        })
        .catch((error) => {
          const newUserInfo = { ...newUser }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setNewUser(newUserInfo)

          // ..
        });
    } else setConfirmPass(true);
  }

  const googleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = {
          name: displayName,
          email: email

        }
        setLoggedIn(signedInUser)
        history.replace(from)
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorMessage, email);

      })
  };
  const fbLogin = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
      .then((res) => {
        const user = res.user;
        setLoggedIn(user)
        history.replace(from)
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);

      })
  };
  const toLogin = () => {
    history.push('/login')
  }
  return (
    <div className="signup_form">
      <section className="form_wrapper">

      <Card className="p-2">
        {
          verifyMessage &&
          <h5 style={{
            textAlign: "center",
            width: "100%",
            margin: "auto",
            padding: "7px",
            borderRadius: "30px",
            background: "#268b268c",
            color: "white"
          }}>
            Verification mail sent!
                            </h5>
        }
        <h4>Sign Up</h4>
        <form autoComplete="off" onSubmit={handleSignup}>

          <TextField
            className="text_field"
            fullWidth
            onBlur={handleChange}
            color="secondary"
            required
            name="fullName"
            label="Your full name"
          />
          <TextField
            className="text_field"
            fullWidth
            onBlur={handleChange}
            required
            color="secondary"
            name="email"
            label="Your Email address"
          />
          <TextField
            type="password"
            onBlur={handleChange}
            className="text_field"
            fullWidth
            required
            color="secondary"
            name="password"
            label="New Password"
          />
          <TextField
            type="password"
            onBlur={handleChange}
            className="text_field"
            fullWidth
            required
            color="secondary"
            name="conPass"
            label="Confirm Password"
          />

          <input
            className=" signup_btn"
            type="submit"
            value="Sign Up"
            fullWidth

          />
        </form>
        {
          confirmPass && <p className="text-danger text-center ">Password doesn't match</p>
        }
        {
          newUser.success ? <p className="text-success text-center"> User created successfully</p> : <p className="text-center text-danger">{newUser.error}</p>
        }
        <p className="text-center ">Already have an account?  <span onClick={toLogin} className="switch_btn"> Log in</span>
        </p>
        </Card>
        <p className="text-center">--------OR-------</p>
        <Card
          onClick={googleLogin}
          className="google">
          <h4 className="text-center p-1 "><FontAwesomeIcon className="google_icon" icon={faGoogle} /> Continue with Google</h4>
        </Card>
        <br/>
        <Card
          onClick={fbLogin}
          className="facebook">
          <h4 className="text-center pt-1"><FontAwesomeIcon className="facebook_icon" icon={faFacebook} /> Continue with Facebook</h4>
        </Card>
       
      </section>
    </div>
  );
};

export default Singup;