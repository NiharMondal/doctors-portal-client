import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Auth/Login/Login';
import Singup from './components/Auth/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()


function App() {
  
  const [loggedIn, setLoggedIn]=useState({})
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Singup/>
        </Route>
        <Route path="/admin">
            <Admin/>
        </Route>
        <PrivateRoute path="/appointment">
          <Appointment/>
        </PrivateRoute>
        
        <PrivateRoute path="/dashboard">
         <Dashboard/>
        </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
