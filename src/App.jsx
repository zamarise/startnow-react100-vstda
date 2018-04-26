import React, { Component } from 'react';

class App extends Component {
  static getColor(priority) {
    switch (priority) {
      case '3':
        return 'success';
      case '2':
        return 'warning';
      case '1':
        return 'danger';
      default:
        return 'default';
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      priority: '2',
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos];
    const todoItem = {
      description: this.state.description,
      priority: this.state.priority
    };

    todos.push(todoItem);

    this.setState({ todos });
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
            <form onSubmit={ this.handleSubmit } className='panel panel-default'>
              <div className='panel-heading panel-title'>Add New To-do</div>
              <div className='panel-body'>
                <label htmlFor='description'>
                  <p>I want to...</p>
                  <textarea
                    id='description'
                    name='description'
                    value={ this.state.description }
                    onChange={ this.handleChange }
                  />
                </label>
                <p />
                <label htmlFor='priority'>
                  <p>How much of a priority is this?</p>
                  <select
                    id='priority'
                    name='priority'
                    value={ this.state.priority }
                    onChange={ this.handleChange }
                  >
                    <option value='1'>High priority</option>
                    <option value='2'>Medium priority</option>
                    <option value='3'>Low priority</option>
                  </select>
                </label>
                <p />
              </div>
              <div className='panel-footer'>
                <button type='submit' className='btn btn-default btn-block'>
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className='col-sm-8'>
            <form onSubmit={ this.handleSubmit } className='panel panel-default'>
              <div className='panel-heading panel-title'>View To-dos</div>
              <div className='panel-body'>
                <strong>Welcome to Very Simple To-do App!</strong>
                <p>Get started now by adding a new task.</p>
                <ul>
                  {this.state.todos.map((todo, index) => (
                    <li
                      key={ todo.description + index }
                      className={ `alert alert-${App.getColor(todo.priority)}` }
                    >
                      <input type='checkbox' />
                      {todo.description}
                    </li>
                  ))}
                </ul>
                {/* <div>{/* <ul>${...toDoItem}</ul> */}
                {/* <form onSubmit={ this.handleSave }>
                  <label>
                    <p>Edit Description</p>
                    <textarea value={ this.state.text } onChange={ this.handleChange } />
                  </label>
                  <p />

                <p> */}
                {/* <button
                    type='submit'
                    className='btn btn-default pull-right'
                    onClick={ this.handleSave }
                  >
                    Save
                  </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      // </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
