import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Modal from 'react-bootstrap/lib/Modal'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import UpComing from './components/UpComing';
import Add from './components/Add';



/*

App.js
This is the main component of the application. This files
contains the main UI of the application.


*/

class App extends Component {


  constructor(props){
    super(props);
    this.state={
       title: 'Birthday Reminder Application',
       act: 0,
       index: '',
       birthdays:[]
    }
  }






  render() {
    return (
  <div className="demo-big-content">
      <Layout>
          <Header title="Birthday Reminder Application" scroll>
              <Navigation>
                  <Link to="/LandingPage">Home</Link>
                      <Link to="/Delete">Delete</Link>
              </Navigation>
          </Header>

          <Content>
              <div className="page-content" />
              <h1>HELLO</h1>
              <UpComing/>
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }

  createTask(task) {
      this.state.birthdays.push({
          task,

      });
      this.setState({ todos: this.state.birthdays });
  }
}

export default App;
