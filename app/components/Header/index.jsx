import React from 'react';
import { IndexLink, Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


@CSSModules(styles)
export default class App extends React.Component {
	render() {
		return (
			<div>
				<header styleName='header'>
					<IndexLink activeClassName={styles.active} styleName='menu-item' to='/'>Main</IndexLink>
					<Link activeClassName={styles.active} styleName='menu-item' to='/test'>Test</Link>
					<Link activeClassName={styles.active} styleName='menu-item' to='/another'>Another</Link>
				</header>
			</div>
		);
	}
}
