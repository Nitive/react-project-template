import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import TodoItem from 'components/TodoItem';


const TodoMainSection = props => {
	const todos = [
		{ text: 'first todo', complited: true },
		{ text: 'second todo', complited: false },
		{ text: 'third todo', complited: true },
	].map((todo, index) => (
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

export default CSSModules(TodoMainSection, styles);
