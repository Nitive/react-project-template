import * as types from 'constants/todos';

export default function todos(state = [], action) {
	switch (action.type) {
	case types.ADD_TODO:
		return [{
			id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
			text: action.text,
			complited: false,
		}, ...state];
	default:
		return state;
	}
}
