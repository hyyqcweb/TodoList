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