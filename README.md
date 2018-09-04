## TodoList

+ 优雅的react代码
+ get点:**dangerouslySetInnerHTML(html代码->html),最新setState写法,父子之间传值,this绑定的三种形式,jsx中逻辑臃肿(代码提取)**
+ react : 声明式开发  jquery : 命令式开发
+ react父子组件通信: 父传子值,通过属性传值,子通过props接收值,子传父值,父传方法给子,子接收并调用父的方法,并传值,从而在父组件里接收值
+ react 视图层框架
+ react 数据层 => redux,mobx
+ react 函数式编程,从而引出了 "面向测试" 的概念
+ propTypes:校验 defaultProps:定义默认值
+ props,state,render三者的关系: 当一个组件的props 或者state 发生改变的时候,它的render函数都将会被重新执行
+ 虚拟DOM: 本质上是一个JS对象,在JS中比较JS对象是不怎么耗性能的,但是比较真实DOM是非常耗性能的

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

```
原始:
1. state 数据
2. JSX 模板
3. 数据 + 模板 结合, 生成 真实的DOM,并显示
4. state 发生改变
5. 数据 + 模板 结合,生成 真实的DOM,替换原始的DOM


缺陷: 
第一次生成了一个完整的DOM片段
第二次又生成了一个完整的DOM片段
第二次DOM替换第一次DOM (非常耗性能)

改良: 
1. state 数据
2. JSX 模板
3. 数据 + 模板 结合, 生成 真实的DOM,并显示
4. state 发生改变
5. 数据 + 模板 结合, 生成 真实的DOM,并不直接替换原始的DOM
6. 新的DOM(DoucumentFragment)和原始的DOM做比对,找差异部分,并替换差异部分DOM部分

缺陷: 
比对消耗性能,差异替换,提升一点性能,所以 性能的提升并不明显

虚拟DOM
1. state 数据
2. JSX 模板
3. 数据 + 模板 结合, 生成 真实的DOM,并显示
<div id="abc"><span>hello world</span></div>
4. 生成虚拟DOM (虚拟DOM就是一个JS对象,用它来描述真实DOM) (损耗了性能,很小)
['div',{id:'abc'},['span',{},'hello world']]
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
['div',{id:'abc'},['span',{},'bye']]
7. 比较原始虚拟DOM和新的虚拟DOM的区别,找到区别是span中的内容 (极大的提升了性能)
8.直接操作DOM,改变span中的内容

虚拟DOM: 本质就是一个JS对象,之所以能够提升性能,是因为JS里面去比较JS对象不怎么耗性能,但比较真实的DOM很耗性能
```