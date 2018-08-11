/* This component is going to handle all the routes */

import React from 'react';
import LandingPage from './LandingPage';
import Delete from './Delete';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
 <Switch>
  <Route exact path="/" component={LandingPage} />
    <Route path="/Delete" component={Delete}/>

 </Switch>

)

export default Main;
