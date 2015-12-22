import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


import Header from 'components/Header';
import Box from 'components/Box';

@CSSModules(styles)
export default class App extends React.Component {

	static propTypes = {
		children: PropTypes.element,
		color: PropTypes.string,
	}

	static defaultProps = {
		color: 'red',
	}


	render() {
		return (
			<div styleName='app'>
				<Header />
				<h1 styleName='title'>Title</h1>
				{this.props.children}
				<Box />
				<Box />
				<Box />
				<div styleName='wrapper'>
					<Box />
				</div>
			</div>
		);
	}
}
