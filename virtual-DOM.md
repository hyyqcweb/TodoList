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

2. JSX 模板 (JSX -> createElement -> 虚拟DOM(js 对象) -> 真实DOM)

3. 数据+ 模板 生成虚拟DOM (虚拟DOM就是一个JS对象,用它来描述真实DOM) (损耗了性能,很小)
['div',{id:'abc'},['span',{},'hello world']]

4. 用虚拟DOM的结构 生成 真实的DOM,并显示
<div id="abc"><span>hello world</span></div>

5. state 发生变化

6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
['div',{id:'abc'},['span',{},'bye']]

7. 比较原始虚拟DOM和新的虚拟DOM的区别,找到区别是span中的内容 (极大的提升了性能)

8. 直接操作DOM,改变span中的内容

虚拟DOM: 本质就是一个JS对象,之所以能够提升性能,是因为JS里面去比较JS对象不怎么耗性能,但比较真实的DOM很耗性能

虚拟DOM底层render 实现: 
```js
	render() {
		return React.createElement('div',{id:"abc"},'item'); // 一个对象,相当我们写
		return <div id="abc"></div>

		// 如果想实现多层嵌套 如: <div><span>hello</span></div>
		return React.createElement('div',{},React.createElement('span',{},'hello'))  
		// 无疑是很麻烦的,所以推出了JSX模板语法
	}
```

虚拟DOM 好处: 
1. 性能提升了
2. 它使得跨端应用得以实现. React Native(得益于 虚拟DOM)(把虚拟DOM 转化给 原生的组件,可以实现代码复用)

setState(异步操作,为了提高react底层的性能)
连续调用三次setState,调用的时间间隔时间非常少,react把三次合成一次,节省了性能

Diff(diffrence)算法: 同层比对(同级比较),因为算法简单,比对速度大大提升,大大提高了性能,不过也是有大量的DOM渲染浪费,造成性能损耗,总体来说 性能还是大大提升的
