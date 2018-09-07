import React, { Component } from 'react';
import { Input, Button, List} from 'antd';
// TodoList UI 组件
export default class TodoListUI extends Component {
	render() {
		const {inputValue, handleInputChange,handleBtnClick,handleItemDelete,list} = this.props;
		return (
			<div style={{
                margin: '5% 0 0 5%'
            }}>
				<Input  placeholder="todo info" style={{
	                width: 300,
	                marginRight: 10
	            }}
	            value={inputValue}
	            onChange= {handleInputChange}
	            />
				<Button type="primary" disabled={!inputValue} onClick={handleBtnClick}>提交</Button>
				<List
		            style={{
		                marginTop: 10,
		                width: 300
		            }}
		            bordered
		            dataSource={list}
		            renderItem={(item,index) => (
		            	<List.Item 
		            		onClick={(index) => {handleItemDelete(index)}}
		            	>
		            		{item}
		            	</List.Item>
		            )}
	            />
			</div>
		)
	}
}