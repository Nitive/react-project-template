import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import TodoItem from 'components/TodoItem';


const TodoMainSection = props => {
	const todos = props.todos.map((todo, index) => (
		<TodoItem
			key={index}
			complited={todo.complited}
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
};

export default CSSModules(TodoMainSection, styles);
