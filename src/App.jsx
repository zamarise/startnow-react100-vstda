import React, { Component } from 'react';

const items = [];
const selectPriority = [{ High: 1, Medium: 2, Low: 3 }];

items.push({ index: 1, value: 'Pick up dry cleaning', done: false });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priorityMenu: 'Select a Priority',
      addTodoValue: 'Add your to-do here!',
      value: '',
      priorityValue: ''
    };

    this.handlePriorityDropdown = this.handlePriorityDropdown.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmitTodo(event) {
    alert(`A to-do item was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  handlePriorityDropdown(event) {
    this.setState({ priorityMenu: event.target.value });
  }

  handleAdd(event) {
    this.setState({ addTodoValue: event.target.value });
  }

  handleSave(event) {
    alert('Your to-do item was saved!');
    event.preventDefault();
  }

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
                <form onSubmit={ this.handleSubmitTodo }>
                  <label>
                    <p>I want to...</p>
                    <textarea value={ this.state.value } onChange={ this.handleChange } />
                  </label>
                  <p />
                  <label>
                    <p>How much of a priority is this?</p>
                    <select value={ this.state.priorityValue } onChange={ this.handlePriorityDropdown }>
                      <option value='high'>High priority</option>
                      <option value='medium'>Medium priority</option>
                      <option value='low'>Low priority</option>
                    </select>
                  </label>
                  <p />
                </form>
              </div>
              <div className='panel-footer'>
                <button
                  type='submit'
                  value='Submit'
                  className='btn btn-default btn-block'
                  type='button'
                  onClick={ this.handleSubmitTodo }
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
                <form onSubmit={ this.handleSave }>
                  <label>
                    <p>Edit Description</p>
                    <textarea value={ this.state.value } onChange={ this.handleChange } />
                  </label>
                  <p />
                  <label>
                    <p>Priority</p>
                    <select
                      label='Priority'
                      options={ selectPriority }
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
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
