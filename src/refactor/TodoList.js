import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getRemoveItemAction,initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios';
// 容器组件
export default class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		store.subscribe(this.handleStoreChange); // subscribe 订阅
	}

	componentDidMount() {
		axios.get('/list.json').then(res => {
			const action = initListAction(res.data);
			store.dispatch(action)
		}).catch(error => {
			console.log(error);
		})
	}

    render() {
        return (
        	<TodoListUI
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				list={this.state.list}
				handleItemDelete={this.handleItemDelete}
        	/>
        )
    }
    handleInputChange(e){
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
    }
    handleStoreChange() {
    	this.setState(store.getState())
    }
    handleBtnClick() {
		const action = getAddItemAction();
    	store.dispatch(action);
    }
    handleItemDelete(index) {
		const action = getRemoveItemAction(index);
		store.dispatch(action);  	
    }

}