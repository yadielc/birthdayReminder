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



class BirthdayItem extends Component {
constructor(props){

  super(props);

  this.state = {
    isEdit: false
  };
  this.onDelete = this.onDelete.bind(this);
  this.onEdit = this.onEdit.bind(this);
  this.onEditSubmit = this.onEditSubmit.bind(this);
}

onDelete(){
  this.props.onDelete(this.props.name);

}

onEdit() {
 this.setState({ isEdit:true});
}

onEditSubmit(event) {
 event.preventDefault();

 this.props.onEditSubmit(this.nameInput.value, this.birthdayInput.value);
}
render() {
  const {name, onDelete, date} = this.props; // getting the name and date from props
    return (
  <div>
  {
    this.state.isEdit
    ? ( // edit part of ternary
      <div onSubmit={this.onEditSubmit}>
       <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} value ={name}/>
        <input placeholder="Birthday" ref={birthdayInput => this.birthdayInput = birthdayInput} value={date}/>
        <button>Save</button>
         </div>
    )
    : (
      <div>
      <span>{name}</span> | <span>{date}</span>
      <button onClick={this.onDelete}>Delete</button>
      <button onClick={this.onEdit}>Edit</button>
      </div>
    )
  }

    </div>
    );
  }

}

export default BirthdayItem;
