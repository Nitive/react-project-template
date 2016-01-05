import * as types from 'constants/todos';

export const addTodo = text => ({
	type: types.ADD_TODO,
	text,
});
