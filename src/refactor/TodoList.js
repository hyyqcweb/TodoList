import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { 
		getInputChangeAction,
		getAddItemAction, 
		getRemoveItemAction,
		getTodoList
	} from './store/actionCreators'
import TodoListUI from './TodoListUI';
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
		const action = getTodoList();
		store.dispatch(action);
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