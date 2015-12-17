import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export default class App extends React.Component {

	render() {
		return (
			<div>
				<header styleName='header'>
					header
				</header>
			</div>
		);
	}
}
