import React, { Component } from 'react';
import App from './App';

class TodoItems extends Component {
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
  constructor(props) {
    super(props);

    this.state = {
      newTaskDescription: '',
      newTaskPriority: '',
      isEditing: false
    };

    this.onClickEdit = this.onClickEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
  }

  onClickEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onSaveEdit() {
    this.setState({
      isEditing: false,
      description: this.state.newTaskDescription,
      priority: this.state.newTaskPriority
    });
  }

  // onSaveEdit() {
  //   this.props.onSaveEdit(this.state.description, this.state.priority);
  // }

  onTodoChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const todo = this.props.todo;
    const index = this.props.index;

    if (this.state.isEditing === true) {
      return (
        <div className='alert col-sm-8 panel panel-default'>
          <div className='panel-body'>
            <label htmlFor='newTaskDescription'>
              <p>
                <strong>Description</strong>
              </p>
              <textarea
                id='newTaskDescription'
                name='newTaskDescription'
                value={ this.state.newTaskDescription }
                onChange={ this.onTodoChange }
                className='update-todo-text'
              />
            </label>

            <p />
            <label htmlFor='newTaskPriority'>
              <p>Priority</p>
              <select
                id='newTaskPriority'
                name='newTaskPriority'
                value={ this.state.newTaskPriority }
                onChange={ this.onTodoChange }
                className='update-todo-priority'
              >
                <option value='0'>Select a priority</option>
                <option value='3'>High priority</option>
                <option value='2'>Medium priority</option>
                <option value='1'>Low priority</option>
              </select>
            </label>
            <p />

            <button className='btn btn-success pull-right update-todo' onClick={ this.onSaveEdit }>
              Save
            </button>
          </div>
        </div>
      );
    }
    return (
      <li
        key={ todo.description }
        className={ `alert alert-${TodoItems.getColor(todo.priority)}` }
        onChange={ this.onTodoChange }
      >
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
            this.onClickEdit();
          } }
          key={ todo.description + index + index }
          style={ { backgroundColor: 'transparent', border: 'none' } }
        >
          <span className='glyphicon glyphicon-edit text-primary edit-todo' aria-hidden='true' />
        </button>
      </li>
    );
  }
}

export default TodoItems;
