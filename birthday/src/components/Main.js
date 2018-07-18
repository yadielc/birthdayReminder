/* This component is going to have all the routes */

import React from 'react';
import LandingPage from './LandingPage';

const Main = () => {
 <Switch>
  <Router exact path="/" component={LandingPage} />
 </Switch>

}

export default Main; 
