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



class App extends Component {
  
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

              <div>
                <Panel>
                  Upcoming Birthdays:<br/>
                  // Added upcoming birthdays using the current state of the array
                  {
                    this.state.birthdays.map(birthday=> {
                       return (
                         <div key={birthday.name}>
                         <span>{birthday.name}</span> | <span>{birthday.date}</span>
                        <button>Delete</button>
                        </div>
                       );

                    })
                  }
                </Panel>
              </div>

              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }

}

export default App;
