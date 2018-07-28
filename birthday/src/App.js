import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

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
  state = {
    birthdays: [
      {personName: 'Felix', birthdayDate: 'August 26th' },

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
