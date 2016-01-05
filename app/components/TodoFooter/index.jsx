import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Link } from 'react-router';


const TodoFooter = props => {
	const todosCount = props.todos.filter(todo => !todo.completed).length;
	if (!todosCount) return null;

	return (
		<footer styleName='footer'>
			<span>{todosCount} items left</span>
			<div>
				<Link activeClassName={styles.filterActive} styleName='filter' to='/todo/all'>All</Link>
				<Link activeClassName={styles.filterActive} styleName='filter' to='/todo/active'>Active</Link>
				<Link activeClassName={styles.filterActive} styleName='filter' to='/todo/completed'>Completed</Link>
			</div>
			<button styleName='clear'>Clear completed</button>
		</footer>
	);
};

TodoFooter.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default CSSModules(TodoFooter, styles);
