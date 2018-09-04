## TodoList

+ 更规范,更优雅的react代码
+ get点:**dangerouslySetInnerHTML(html代码->html),最新setState写法,父子之间传值,this绑定的三种形式,jsx中逻辑臃肿(代码提取)**
+ react : 声明式开发  jquery : 命令式开发
+ react父子组件通信: 父传子值,通过属性传值,子通过props接收值,子传父值,父传方法给子,子接收并调用父的方法,并传值,从而在父组件里接收值
+ react 视图层框架
+ react 数据层 => redux,mobx
+ react 函数式编程,从而引出了 "面向测试" 的概念
+ propTypes:校验 defaultProps:定义默认值

- dangerouslySetInnerHTML
```js
  render() {
    const {content} = this.props;
    return (
      <div 
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{__html: content}}
      />
    )
  }
```
- 最新setState写法
```js
    // 老版写法
    // this.setState({
    //   inputValue:e.target.value
    // })

    // 新版写法
    const value = e.target.value
    this.setState(() => ({
      inputValue:value
    }))
```
- 父子之间传值
```js
  // 父
   <TodoItem 
        content={item} 
        index={index}
        deteleItem={this.handleDetele} 
        dangerouslySetInnerHTML={{__html: item}}
   /> 
  // 子
  const {content} = this.props;
    return (
      <div 
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{__html: content}}
      />
    ) 
```
- this绑定的三种形式
```js
   export default class Demo extend React.Component {
    constructor() {
      super()
      this.handleClick = this.handleClick.bind(this) // 第三种形式
    }
    handleClick = () => {
      console.log(1) // 第一种形式
    }
    handleClick() {
      console.log(2) // 第二种形式
    }
    handleClick() {
      console.log(3) // 第三种形式
    }
    render() {
      return (
        <div /*onClick={this.handleClick}*/ onClick={this.handleClick.bind(this)}>
          测试
        </div>
      )
    }
  }
```