import React, { Component } from 'react';

class App extends Component {
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
              <p>
                <div className='panel-body'>
                  I want to...
                  <input
                    name='amountDue'
                    className='form-control'
                    // value={ this.state. }
                    // onChange={ this. }
                    placeholder=''
                    type='number'
                  />
                </div>
                <div className='panel-body'>
                  <div className='priority'>
                    <button
                      className='btn btn-default dropdown-toggle'
                      type='button'
                      id='dropdownMenu1'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='true'
                    >
                      Select a Priority
                      <span className='caret' />
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                      <li>
                        <a href='#'>Action</a>
                      </li>
                      <li>
                        <a href='#'>Another action</a>
                      </li>
                      <li>
                        <a href='#'>Something else here</a>
                      </li>
                      <li role='separator' className='divider' />
                      <li>
                        <a href='#'>Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </p>

              <div className='panel-footer'>
                <button
                  className='btn btn-default btn-block'
                  type='button'
                  // onClick={ this. }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
