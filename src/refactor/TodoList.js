import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

export default class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = store.getState();
	}
    render() {
        return (
            <div style={{
                margin: '5% 0 0 5%'
            }}>
				<Input  placeholder="todo info" style={{
                width: 300,
                marginRight: 10
            }}/>
				<Button type="primary">提交</Button>
				<List
		            style={{
		                marginTop: 10,
		                width: 300
		            }}
		            bordered
		            dataSource={this.state.list}
		            renderItem={item => (<List.Item>{item}</List.Item>)}
	            />
			</div>
        )
    }
}