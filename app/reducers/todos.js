import * as types from 'constants/todos';

export default function todos(state = [], action) {
	switch (action.type) {

	case types.ADD_TODO:
		return [{
			id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
			text: action.text,
			completed: false,
		}, ...state];

	case types.TOGGLE_TODO:
		return state.map(todo => {
			if (todo.id === action.id) {
				return {
					...todo,
					completed: !todo.completed,
				};
			}
			return todo;
		});

	default:
		return state;
	}
}
