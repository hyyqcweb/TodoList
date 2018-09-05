import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import Test from './Test';


export default class TodoList extends Component {

  constructor() {
    super();
    // 当组件的state或者props发生改变时,render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleDetele = this.handleDetele.bind(this);
  }
  // 组件在挂载到页面之前,调用
  componentWillMount() {
    console.log('componentWillMount')
  }
  // 组件在挂载到页面之后,调用
  componentDidMount() {
    console.log('componentDidMount')
  }
  // 组件被更新之前,它会被自动执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }
  // 组件被更新之前,它会被自动执行,如果shouldComponentUpdate
  // 返回true,它才执行,如果返回false,它就不会被执行了
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // 组件更新完成之后,它会被执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  // 当一个组件从父组件接受了参数
  // 只要父组件的render函数被重新执行了,子组件的这个生命周期函数就会被执行了
  // 如果这个组件第一次存在于父组件中,不会执行
  // 如果这个组件之前已经存在于父组件中,才会执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }


  handleInputChange = (e) => {
    // 另一种写法
    // const value = e.target.value
    // this.setState(() => ({
    //   inputValue:value
    // }))
    
    // ref 写法 不推荐!!!
    const value = this.input.value;
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
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }),() => {
      console.log(this.ul.querySelectorAll('div').length)
      // 当setState执行完后在执行,就没有问题啦,尽量不要使用
    })
    // console.log(this.ul.querySelectorAll('div').length)
    // 正常console打印应该是 1,2,3...
    // 为什么获取DOM节点都是  0,1,2... ,因为setState是一个异步函数,所以console.log
    // 会在setState之前调用,所以会出现这样的问题
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
                  <TodoItem 
                    content={item} 
                    index={index}
                    key={index}
                    deteleItem={this.handleDetele}
                  />
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
          ref={(input) => {this.input = input}}
        />
        <button onClick={this.handleBtnClick}>提交</button>
       </div>
       <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
       </ul>
       <Test content={this.state.inputValue}/>
      </Fragment>
    );
  }
}

{/*组件拆分*/}
{/*
  <TodoItem 
    content={item} 
    index={index}
    deteleItem={this.handleDetele}
  /> 
*/}                  

{/*一个组件中执行*/}
{/* <li 
 key={index}
 onClick={() => this.handleDetele(index)}
 dangerouslySetInnerHTML={{__html: item}}
 />*/}