import React,{Component} from 'react';

export default class Test extends Component {
	render() {
		// 当父组件的render函数被运行时,他的子组件的render都将会重新执行
		return (
			<div>
				{this.props.content}
			</div>
		)
	}
}