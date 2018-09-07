import React from 'react';
import { Input, Button, List} from 'antd';

// 无状态组件
const TodoListUI = ({inputValue, handleInputChange,handleBtnClick,handleItemDelete,list}) => {
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
export default TodoListUI


// TodoList UI 组件 有状态组件
// export default class TodoListUI extends React.Component {
// 	render() {
// 		const {inputValue, handleInputChange,handleBtnClick,handleItemDelete,list} = this.props;
// 		return (
// 			<div style={{
//                 margin: '5% 0 0 5%'
//             }}>
// 				<Input  placeholder="todo info" style={{
// 	                width: 300,
// 	                marginRight: 10
// 	            }}
// 	            value={inputValue}
// 	            onChange= {handleInputChange}
// 	            />
// 				<Button type="primary" disabled={!inputValue} onClick={handleBtnClick}>提交</Button>
// 				<List
// 		            style={{
// 		                marginTop: 10,
// 		                width: 300
// 		            }}
// 		            bordered
// 		            dataSource={list}
// 		            renderItem={(item,index) => (
// 		            	<List.Item 
// 		            		onClick={(index) => {handleItemDelete(index)}}
// 		            	>
// 		            		{item}
// 		            	</List.Item>
// 		            )}
// 	            />
// 			</div>
// 		)
// 	}
// }