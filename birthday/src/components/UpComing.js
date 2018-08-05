import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'

class UpComing extends Component {
  render() {
    return(
      <div>
        <Panel>
          Upcoming Birthdays:<br/>
          Here all the upcoming birthdays go.<br/>
        </Panel>
      </div>

      )
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

export default UpComing;
