import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 浏览器插件

// store是唯一的
// 只有store才能改变自己的内容
// Reducer 必须是纯函数
export default store;