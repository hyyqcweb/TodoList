import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'

export default class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		store.subscribe(this.handleStoreChange); // subscribe 订阅
	}
    render() {
        return (
            <div style={{
                margin: '5% 0 0 5%'
            }}>
				<Input  placeholder="todo info" style={{
	                width: 300,
	                marginRight: 10
	            }}
	            value={this.state.inputValue}
	            onChange= {this.handleInputChange}
	            />
				<Button type="primary" disabled={!this.state.inputValue} onClick={this.handleBtnClick}>提交</Button>
				<List
		            style={{
		                marginTop: 10,
		                width: 300
		            }}
		            bordered
		            dataSource={this.state.list}
		            renderItem={(item,index) => (
		            	<List.Item 
		            		onClick={this.handleItemDelete.bind(this,index)}
		            	>
		            		{item}
		            	</List.Item>
		            )}
	            />
			</div>
        )
    }
    handleInputChange(e){
		const action = {
			type: CHANGE_INPUT_VALUE,
			value: e.target.value
		}
		store.dispatch(action);
    }
    handleStoreChange() {
    	this.setState(store.getState())
    }
    handleBtnClick() {
		const action = {
    		type: ADD_TODO_ITEM
    	}
    	store.dispatch(action);
    }
    handleItemDelete(index) {
		const action = {
			type:DELETE_TODO_ITEM,
			index
		} 
		store.dispatch(action);  	
    }

}