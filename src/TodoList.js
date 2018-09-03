import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem.js';

export default class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleDetele = this.handleDetele.bind(this);
  }

  handleInputChange = (e) => {
    // 另一种写法
    const value = e.target.value
    this.setState(() => ({
      inputValue:value
    }))

    // 老版写法
    // this.setState({
    //   inputValue:e.target.value
    // })
  };

  handleBtnClick = (e) => {
    // ES3写法
    // let {list} = this.state;
    // list.unshift(this.state.inputValue);
    // this.setState({
    //   list,
    //   inputValue: ''
    // })
    
    // ES6写法
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:''
    // })
    
    // 新版写法
    this.setState((prevState) => ({
      list:[prevState.list,prevState.inputValue],
      inputValue:''
    }))
  };

  handleDetele = (index) => {
     // ES3写法
     // let {list} = this.state;
     // list.splice(index,1);
     // this.setState({
     //  list
     // })
     
     // ES6写法
     // const list = [...this.state.list];
     // list.splice(index,1);
     // this.setState({
     //    list
     // })
     
     // 新版写法
     this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
     })
  };

  getTodoItem() {
    return this.state.list.map((item,index) => {
             return (
                <div key={index}>
                  {/*组件拆分*/}
                  <TodoItem 
                    content={item} 
                    index={index}
                    deteleItem={this.handleDetele} 
                    dangerouslySetInnerHTML={{__html: item}}
                  /> 
                  {/*一个组件中执行*/}
                  {/* <li 
                   key={index}
                   onClick={() => this.handleDetele(index)}
                   dangerouslySetInnerHTML={{__html: item}}
                   />*/}
                </div>
              )
    })
  }

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
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}