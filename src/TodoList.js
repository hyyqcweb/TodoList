import React, { Component, Fragment } from 'react';
import './style.css';

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

  handleBtnClick = (e) => {
    let {list} = this.state;
    list.unshift(this.state.inputValue);
    this.setState({
      list,
      inputValue: ''
    })
  };

  handleDetele = (index) => {
     let {list} = this.state;
     list.splice(index,1);
     this.setState({
      list
     })
  };

  render() {
    return (
      <Fragment>
       <div>
        <label htmlFor="automatic">自动对焦</label>
        <input
          id="automatic"
          className="input" 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
       </div>
        <ul>
          {
            this.state.list.map((item,index) => {
             return  <li 
             key={index}
             onClick={() => this.handleDetele(index)}
             dangerouslySetInnerHTML={{__html: item}}
             />
            })
          }
        </ul>
      </Fragment>
    );
  }
}