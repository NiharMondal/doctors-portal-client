import { Card, TextField } from '@material-ui/core';
import './Login.css'
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase/app';
import "firebase/auth"
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../firebase.config';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Login = () => {
  const [loggedIn, setLoggedIn]= useContext(UserContext)
  const history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    error: '',
    success: false
  })
  const handleChange = (e) => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);

  }
  const handleSignup = (e) => {
    e.preventDefault()
    if (user.password && user.email) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const userInfo = { ...user };
          userInfo.error = "";
          userInfo.success = true;
          const currentUser = firebase.auth().currentUser;

          if (currentUser.emailVerified) {
            setUser(userInfo, currentUser);
            history.replace(from)
          } else {
            currentUser.sendEmailVerification()
          }
        })
        .catch((error) => {
          const userInfo = { ...user };
          userInfo.error = error.message;
          userInfo.success = false;
          setUser(userInfo)

        });
    }
  }

  const toSignup = () => {
    history.push("/signup")
  };

  const googleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((res)=> {
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
  }
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
  return (
    <div className="signup_form ">
      <section className="form_wrapper login_form">

     
      <Card className="p-2">
        <h4>Login</h4>
        <form autoComplete="off" onSubmit={handleSignup} className="exact_form">

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
            label="Enter Password"
          />

          <input
            className=" login_btn"
            type="submit"
            value="Login"
            fullWidth

          />
        </form>
        {user.success && <p className="text-success text-center">Logged in successfully</p>}
        {
          user.error && <p className="text-danger text-center">{user.error}</p>
        }

        <p className="text-center ">Don't have an account? <span onClick={toSignup} className="switch_btn">Create an account</span></p>
        </Card>
        <p className="text-center">--------OR-------</p>
        <Card className="google" onClick={googleLogin}>
          <h4 className="text-center p-1 "><FontAwesomeIcon className="google_icon" icon={faGoogle} /> Continue with Google</h4>
        </Card>
        <br />
        <Card className="facebook" onClick={fbLogin}>
          <h4 className="text-center pt-1"><FontAwesomeIcon className="facebook_icon" icon={ faFacebook}/> Continue with Facebook</h4>
        </Card>
      </section>
    </div>
  );
};

export default Login;