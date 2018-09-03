import React,{Component} from 'react';

export default class TodoItem extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	handleClick = () => {
		const {deteleItem,index} = this.props;
		deteleItem(index)
	}

	render() {
		const {content} = this.props;
		return (
			<div 
				onClick={this.handleClick}
				dangerouslySetInnerHTML={{__html: content}}
			/>
		)
	}
}