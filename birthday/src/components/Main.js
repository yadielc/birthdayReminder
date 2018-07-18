/* This component is going to have all the routes */

import React from 'react';
import LandingPage from './LandingPage';
import Add from './Add';
import Delete from './Delete';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
 <Switch>
  <Route exact path="/" component={LandingPage} />
  <Route path="/Add" component={Add}/>
 </Switch>

)

export default Main;
