import React from 'react';
import { connect } from 'react-redux';

// TodoList 是UI组件
const TodoList = ({inputValue, handleInputChange, handleClick, handleDelete, list}) => {
	return (
            <div>
				<div>
					<input type="text" value={inputValue} onChange={handleInputChange}/>
					<button onClick={handleClick}>提交</button>
				</div>
				<ul>
					{
						list.map((item,index) => {
							return <li onClick={ () => handleDelete(index)} key={index}>{item}</li>
						})
					}
				</ul>
			</div>
        )
}
// 遍历store中的数据转换为props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// dispatch => store.dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange(e){
			const action = {
				type: 'change_input_value',
				value: e.target.value
			};
			dispatch(action);
		},
		handleClick() {
			const action = {
				type: 'add_item'
			};
			dispatch(action);
		},
		handleDelete(index) {
			const action = {
				type: 'remove_item',
				index
			};
			dispatch(action);
		}
	}
}
// connect 返回的结果是 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);