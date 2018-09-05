react 提升性能几个点
1. shouldComponentUpdate 提高react组件的性能,避免不必要的render渲染
2. setState 异步函数 多次数据合并成一次,降低虚拟DOM的比对频率
3. constructor里面 绑定 函数的 作用域
4. 虚拟DOM 同层比对,key值绑定 提升比对速度
