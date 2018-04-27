<li key={ todo.description + index } className={ `alert alert-${App.getColor(todo.priority)}` }>
  <input type='checkbox' /* checkedLink*/ />
  {todo.description}
  <button
    type='button'
    className='btn btn-default btn-sm pull-right'
    onClick={ () => {
      this.removeTodo(todo, index);
    } }
    key={ todo.description + index }
    style={ { backgroundColor: 'transparent', border: 'none' } }
  >
    <span className='glyphicon glyphicon-trash text-danger delete-todo' aria-hidden='true' />
  </button>
  <button
    type='button'
    className='btn btn-default btn-sm pull-right'
    style={ { backgroundColor: 'transparent', border: 'none' } }
  >
    <span className='glyphicon glyphicon-edit text-primary edit-todo' aria-hidden='true' />
  </button>
</li>;
