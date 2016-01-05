import * as types from 'constants/todos';

export const addTodo = text => ({
	type: types.ADD_TODO,
	text,
});

export const toggleTodo = id => ({
	type: types.TOGGLE_TODO,
	id,
});

export const deleteTodo = id => ({
	type: types.DELETE_TODO,
	id,
});

export const clearCompleted = () => ({
	type: types.CLEAR_COMPLETED,
});
