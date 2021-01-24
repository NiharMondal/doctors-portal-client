import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AllPateints from './components/AllPatients/AllPatients/AllPateints';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/appointment">
          <Appointment/>
        </Route>
        <Route path="/dashboard/appointments">
          <DashBoard/>
        </Route>
        <Route path="/dashboard/all-patients">
          <AllPateints/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
