import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import cx from 'classnames';


const TodoItem = props => {
	const toggleTodo = () => props.toggle(props.id);
	return (
		<div styleName={cx('item', { completed: props.completed })}>
			<svg onClick={toggleTodo} styleName='checkbox' width='40' height='40' viewBox='-20 -20 140 140'>
				<circle cx='50' cy='50' r='50' fill='none' stroke='#bddad5' strokeWidth='3'/>
				{ props.completed && <path fill='#5dc2af' d='M72 25L42 71 27 56l-4 4 20 20 34-52z' /> }
			</svg>
			<span styleName='text'>{props.children}</span>
			<div onClick={() => props.delete(props.id)} styleName='delete' />
		</div>
	);
};

TodoItem.propTypes = {
	children: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	delete: PropTypes.func.isRequired,
};

export default CSSModules(TodoItem, styles, { allowMultiple: true });
