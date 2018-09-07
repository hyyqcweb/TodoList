import React, { Component } from 'react';
import { Input, Button, List} from 'antd';
// TodoList UI 组件
export default class TodoListUl extends Component {
	render() {
		return (
			<div style={{
                margin: '5% 0 0 5%'
            }}>
				<Input  placeholder="todo info" style={{
	                width: 300,
	                marginRight: 10
	            }}
	            value={this.props.inputValue}
	            onChange= {this.props.handleInputChange}
	            />
				<Button type="primary" disabled={!this.props.inputValue} onClick={this.props.handleBtnClick}>提交</Button>
				<List
		            style={{
		                marginTop: 10,
		                width: 300
		            }}
		            bordered
		            dataSource={this.props.list}
		            renderItem={(item,index) => (
		            	<List.Item 
		            		onClick={(index) => {this.props.handleItemDelete(index)}}
		            	>
		            		{item}
		            	</List.Item>
		            )}
	            />
			</div>
		)
	}
}