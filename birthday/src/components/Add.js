import React, {Component} from 'react';

class Add extends Component {
  render() {
    return(

      <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>

            </form>
    )
  }

  handleCreate(event) {
      event.preventDefault();

      const createInput = this.refs.createInput;
      const task = createInput.value;
      const validateInput = this.validateInput(task);

      if (validateInput) {
          this.setState({ error: validateInput });
          return;
      }

      this.setState({ error: null });
      this.props.createTask(task);
      this.refs.createInput.value = '';
  }

}

export default Add;
