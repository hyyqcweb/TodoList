import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST,GET_INIT_LIST } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getRemoveItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});

export const getInitList = () => ({
	type: GET_INIT_LIST
});

// export const getTodoList = () => {
// 	return (dispatch) => {
// 		axios.get('/list.json').then(res => {
// 			const action = initListAction(res.data);
// 			dispatch(action)
// 		}).catch(error => {
// 			console.log(error);
// 		})
// 	}
// }