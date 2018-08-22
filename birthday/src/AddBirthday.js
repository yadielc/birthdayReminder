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



class AddBirthday extends Component {
constructor(props){
  super(props);
  this.onSubmit = this.onSubmit.bind(this);
}


onSubmit(event){
  event.preventDefault(); // to prevent the page from refreshing
  this.props.onAdd(this.nameInput.value, this.birthdayInput.value);

  this.nameInput = '';
  this.birthdayInput = '';
}
render() {
  const {name, onDelete, date} = this.props; // getting the name and date from props
    return (
  <form onSubmit={this.onSubmit}>
  <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
  <input placeholder="Birthday" ref={birthdayInput => this.birthdayInput = birthdayInput}/>
 <button>Add</button>
    </form>
    );
  }

}

export default AddBirthday;
