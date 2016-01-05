import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Link } from 'react-router';


const TodoFooter = props => (
	<footer styleName='footer'>
		3 items left
		<div>
			<Link activeClassName={styles.filterActive} styleName='filter' to='/todo/all'>All</Link>
			<Link activeClassName={styles.filterActive} styleName='filter' to='/todo/active'>Active</Link>
			<Link activeClassName={styles.filterActive} styleName='filter' to='/todo/completed'>Completed</Link>
		</div>
		<button styleName='clear'>Clear completed</button>
	</footer>
);

export default CSSModules(TodoFooter, styles);
