import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Layout, Navigation, Drawer, Content } from 'react-mdl';

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
  render() {
    return (
  <div className="demo-big-content">
      <Layout>
          <Header title="Birthday Reminder Application" scroll>
              <Navigation>
                  <a href="/">Home</a>
                  <a href="/">Add</a>
                  <a href="/">Delete</a>
                  <a href="/">Link</a>
              </Navigation>
          </Header>

          <Content>
              <div className="page-content" />
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
