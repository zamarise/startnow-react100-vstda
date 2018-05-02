import React, { Component } from 'react';

class Todo extends Component {
  static getColor(priority) {
    switch (priority) {
      case '3':
        return 'danger';
      case '2':
        return 'warning';
      case '1':
        return 'success';
      default:
        return 'default';
    }
  }
  // constructor(props) {
  //   super(props);

  //   // this.state = { };
  // }

  render() {
    const todo = this.props.todo;
    const index = this.props.index;
    const value = this.props.value;

    return (
      <li key={ todo.description + index } className={ `alert alert-${Todo.getColor(todo.priority)}` }>
        {/* <input type='checkbox' checkedLink /> */}
        {todo.description}
        <button
          type='button'
          className='btn btn-default btn-sm pull-right'
          onClick={ () => {
            this.props.removeTodo(todo, index);
          } }
          key={ todo.description + index }
          style={ { backgroundColor: 'transparent', border: 'none' } }
        >
          <span className='glyphicon glyphicon-trash text-danger delete-todo' aria-hidden='true' />
        </button>
        <button
          type='button'
          className='btn btn-default btn-sm pull-right'
          onClick={ () => {
            this.props.editTodo(todo, index);
          } }
          key={ todo.description + index }
          style={ { backgroundColor: 'transparent', border: 'none' } }
        >
          <span className='glyphicon glyphicon-edit text-primary edit-todo' aria-hidden='true' />
        </button>
      </li>
    );
  }
}
export default Todo;
