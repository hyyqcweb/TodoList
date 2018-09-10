import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './secondRefactor/TodoList'
import {Provider} from 'react-redux';
import store from './secondRefactor/store'

const App = (
	<Provider store={store}>
		<TodoList/>
	</Provider>
)

ReactDOM.render(App, document.getElementById('root'));