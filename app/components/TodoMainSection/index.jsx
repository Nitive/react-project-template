import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import TodoItem from 'components/TodoItem';


const TodoMainSection = props => {
	const todosArray = (() => {
		switch (props.todoFilter) {
		case 'all': return props.todos;
		case 'active': return props.activeTodos;
		case 'complited': return props.complitedTodos;
		default: return props.todos;
		}
	})();

	const todos = todosArray.map(todo => (
		<TodoItem
			key={todo.id}
			id={todo.id}
			complited={todo.complited}
			toggle={props.toggleTodo}
		>
			{todo.text}
		</TodoItem>
	));

	return (
		<section>
			{todos}
		</section>
	);
};

TodoMainSection.propTypes = {
	todos: PropTypes.array.isRequired,
	activeTodos: PropTypes.array.isRequired,
	complitedTodos: PropTypes.array.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	todoFilter: PropTypes.string,
};

export default CSSModules(TodoMainSection, styles);
