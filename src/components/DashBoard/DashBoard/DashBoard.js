import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import DiffSection from '../DiffSection/DiffSection'
import Default from '../DiffSection/Default/Default';
const Dashboard = () => {
  const { url, path } = useRouteMatch();
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDateChange = date => {
    setSelectedDate(date)

  }
  return (
    <Grid container className="container">
      <Grid item md={3} xs={12} sm={6}>
        <Sidebar url={url} />
      </Grid>
      <Grid item md={9} sm={6}>
        <Switch>
          <Route exact path={path}>
            <Default />
          </Route>
          <Route path={`${path}/:diffSec`}>
            <DiffSection date={selectedDate} handleDateChange={handleDateChange} />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Dashboard;