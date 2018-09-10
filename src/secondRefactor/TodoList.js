import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {};
	}

	

	handleClick = () => {

	};

    render() {
        return (
            <div>
				<div>
					<input type="text" value={this.props.inputValue} onChange={this.props.handleInputChange}/>
					<button onClick={this.handleClick}>提交</button>
				</div>
				<ul>
					<li>123</li>
				</ul>
			</div>
        )
    }
}
// 遍历store中的数据转换为props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
// dispatch => store.dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange(e){
			const action = {
				type: 'change_input_value',
				value: e.target.value
			}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);