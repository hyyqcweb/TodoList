import React,{Component} from 'react';

export default class TodoItem extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	handleClick = () => {
		this.props.deteleItem(this.props.index)
	}

	render() {
		return (
			<div 
			onClick={this.handleClick}
			dangerouslySetInnerHTML={{__html: this.props.content}}
			/>
		)
	}
}