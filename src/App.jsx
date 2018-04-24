import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priorityMenu: 'Select a Priority',
      addTodoValue: 'Add your to-do here!',
      text: '',
      toDoItem: ['zero', 'one'],
      priorityValue: ''
    };

    // this.handlePriorityDropdown = this.handlePriorityDropdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    this.handleAddText = this.handleAddText.bind(this);
    // this.handleList = this.handleList.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleAddText() {
    this.state.toDoItem.push(this.state.text);
    this.setState(this.state);
  }

  handleSubmitTodo(e) {
    alert(`A to-do item was submitted: ${this.state.text}`);
    e.preventDefault();
  }

  // handlePriorityDropdown(event) {
  //   this.setState({ priorityMenu: event.target.toDoItem });
  // }

  // handleSave(event) {
  //   alert('Your to-do item was saved!');
  //   event.preventDefault();
  // }

  // function HandleList() => toDoItem.map(toDoItem => <li>{toDoItem}</li>);

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>VSTDA</h1>
        <p className='lead bg-light text-gray-dark text-center'>
          A very simple to-do app made in React
        </p>

        <hr />

        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading panel-title'>Add New To-do</div>
              <div className='panel-body'>
                <label>
                  <p>I want to...</p>
                  <textarea type='text' onChange={ this.handleChange } />
                </label>
                <p />
                <label>
                  <p>How much of a priority is this?</p>
                  <select value={ this.state.priorityValue } onChange={ this.handlePriorityDropdown }>
                    <option value='1'>High priority</option>
                    <option value='2'>Medium priority</option>
                    <option value='3'>Low priority</option>
                  </select>
                </label>
                <p />
              </div>
              <div className='panel-footer'>
                <button
                  className='btn btn-default btn-block'
                  onClick={ () => {
                    this.handleAddText();
                    this.handleSubmitTodo();
                    this.handleList();
                  } }
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading panel-title'>View To-dos</div>
              <div className='panel-body'>
                {this.state.text}
                <div>{/* <ul>${...toDoItem}</ul> */}</div>
                {/* <form onSubmit={ this.handleSave }>
                  <label>
                    <p>Edit Description</p>
                    <textarea value={ this.state.text } onChange={ this.handleChange } />
                  </label>
                  <p />
                  <label>
                    <p>Priority</p>
                    <select
                      label='Priority'
                      // options={ selectPriority }
                      value={ this.state.priorityValue }
                      onChange={ this.handlePriorityDropdown }
                    >
                      <option value='1'>High priority</option>
                      <option value='2'>Medium priority</option>
                      <option value='3'>Low priority</option>
                    </select>
                  </label>
                </form>

                <p>
                  <button
                    type='submit'
                    value='Submit'
                    className='btn btn-default pull-right'
                    onClick={ this.handleSave }
                  >
                    Save
                  </button> */}
                {/* </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
