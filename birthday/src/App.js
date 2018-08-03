import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
//import Upcoming from './components/UpComing';



/*

App.js
This is the main component of the application. This files
contains the main UI of the application.


<Drawer title="Title">
    <Navigation>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </Navigation>
</Drawer>


*/

class App extends Component {

  /*
  State is the arrays of the current birthdays that are coming up.

  */
  state = {
    birthdays: [
      {personName: 'Felix', birthdayDate: 'August 26th' },
      {personName: 'Sam', birthdayDate: 'August 2nd' },
      {personName: 'Felix', birthdayDate: 'July 27th' }

    ]

  }
  render() {
    return (
  <div className="demo-big-content">
      <Layout>
          <Header title="Birthday Reminder Application" scroll>
              <Navigation>
                  <Link to="/LandingPage">Home</Link>
                    <Link to="/Add">Add</Link>
                      <Link to="/Delete">Delete</Link>

              </Navigation>
          </Header>

          <Content>
              <div className="page-content" />
              <h1>HELLO</h1>
        
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
