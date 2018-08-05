import React, {Component} from 'react';

class Add extends Component {

  constructor(props) {
       super(props);

       this.state = {
           error: null
       };
   }

  render() {
    return(

      <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>

            </form>
    )
  }

  handleCreate(event) {
       const createInput = this.refs.createInput;
       const task = createInput.value;
      event.preventDefault();


      this.setState({ error: null });
      this.props.createTask(task);
      this.refs.createInput.value = '';
  }


    formSubmit = (e) => {
      e.preventDefault();

      let birthdays = this.state.birthdays;
      let name = this.refs.name.value;
      let date = this.refs.date.value;

      let birthday= {
          name, date
      }

      birthdays.push(birthday);

      this.setState({
        birthdays: birthdays
      });





    }



}

export default Add;
