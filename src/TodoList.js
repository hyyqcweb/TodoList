import React, { Component, Fragment } from 'react';

export default class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue:e.target.value
    })
  };

  render() {
    return (
      <Fragment>
       <div>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleInputChange}
        />
        <button>提交</button>
       </div>
        <ul>
          <li>学英语</li>
          <li>学英语</li>
        </ul>
      </Fragment>
    );
  }
}