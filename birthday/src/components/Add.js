import React, {Component} from 'react';

/*NOT USED ANYMORE, FOR NOW
*/

class Add extends Component {

  render() {
      let birthdays = this.state.birthdays;
    return(

      <div>
      <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Name" ref="nameForm" />
                <button onClick ={(e)=>this.formSubmit(e)}> Add</button>
            </form>
            <pre>
            {birthdays.map((birthday,i) =>
              <li key={i}>
              {i+1}, {birthday.name}, {birthday.date}
              <button onClick={()=>this.fRemove(i)}>Remove</button>
              <button onClick={()=>this.fEdit(i)}>Edit</button>
              </li>

            )}
            </pre>
            </div>
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

      this.refs.nameForm.reset();



    }



}

export default Add;
