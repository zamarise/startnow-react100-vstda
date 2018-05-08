import React, { Component } from 'react';

class ListTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.count = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos];
    const todoItem = {
      description: this.state.description,
      priority: this.state.priority,
      isEditing: false,
      id: (this.count += 1)
    };

    todos.push(todoItem);

    this.setState({ todos, description: '' });
  }

  removeTodo(name, index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({ todos });
  }

  editTodo(id) {
    const todoIndex = this.state.todos.findIndex(todo => todo.id === id);
    const todos = this.state.todos;

    todos[todoIndex].isEditing = true;

    this.setState({ todos });
  }

  render() {
    return (
      <div className='container'>
        <div className='col-sm-8'>
          <form onSubmit={ this.handleSubmit } className='panel panel-default'>
            <div className='panel-heading panel-title'>View To-dos</div>
            <div className='panel-body'>
              {!this.state.todos.length && (
                <center>
                  <strong>Welcome to Very Simple To-do App!</strong>
                  <p>Get started now by adding a new task.</p>
                </center>
              )}
              <ul>
                {this.state.todos.map((todo, index) => (
                  <Todos
                    key={ todo.id }
                    todo={ todo }
                    index={ index }
                    todos={ this.state.todos }
                    description={ this.description }
                    priority={ this.priority }
                    removeTodo={ this.removeTodo }
                    handleChange={ this.handleChange }
                    editTodo={ this.editTodo }
                    // isEditing={ this.isEditing }
                  />
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ListTodos;
