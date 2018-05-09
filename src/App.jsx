import React, { Component } from 'react';
import TodoItems from './TodoItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      priority: '',
      todos: []
    };

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  handleTodoChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleTodoAdd(e) {
    e.preventDefault();
    const todos = [...this.state.todos];
    const todoItem = {
      description: this.state.description,
      priority: this.state.priority
    };

    todos.push(todoItem);

    this.setState({ todos, description: '' });
  }

  removeTodo(todo, index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({ todos });
  }

  editTodo(todoIndex, todo) {
    const todos = [...this.state.todos];
    todos[todoIndex] = todo;
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
            <form onSubmit={ this.handleTodoAdd } className='panel panel-default'>
              <div className='panel-heading'>Add New To-do</div>
              <div className='panel-body'>
                <label htmlFor='description'>
                  <p>I want to...</p>
                  <textarea
                    id='description'
                    name='description'
                    value={ this.state.description }
                    onChange={ this.handleTodoChange }
                    className='create-todo-text'
                  />
                </label>
                <p />
                <label htmlFor='priority'>
                  <p>How much of a priority is this?</p>
                  <select
                    id='priority'
                    name='priority'
                    value={ this.state.priority }
                    onChange={ this.handleTodoChange }
                    className='create-todo-priority'
                  >
                    <option value='0'>Select a priority</option>
                    <option value='3'>High priority</option>
                    <option value='2'>Medium priority</option>
                    <option value='1'>Low priority</option>
                  </select>
                </label>
                <p />
              </div>
              <div className='panel-footer'>
                <button type='submit' className='btn btn-default btn-block create-todo'>
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>View To-dos</div>
              <div className='panel-body'>
                {!this.state.todos.length && (
                  <center>
                    <strong>Welcome to Very Simple To-do App!</strong>
                    <p>Get started now by adding a new task.</p>
                  </center>
                )}
                <ul>
                  {this.state.todos.map((todo, index) => (
                    <TodoItems
                      key={ todo.id }
                      todo={ todo }
                      index={ index }
                      removeTodo={ this.removeTodo }
                      editTodo={ this.editTodo }
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
