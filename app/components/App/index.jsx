import React, { PropTypes } from 'react';
import './styles.css';

export default class App extends React.Component {

	static propTypes = {
		children: PropTypes.element,
	}


	render() {
		return (
			<div>
				<header className='header'>header</header>
				{this.props.children}
			</div>
		);
	}
}
