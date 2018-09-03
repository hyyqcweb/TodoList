## TodoList

+ 更规范,更优雅的react代码
+ get点:**dangerouslySetInnerHTML(html代码->html),最新setState写法,父子之间传值,this绑定的三种形式,jsx中逻辑臃肿(代码提取)**

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