import React, { PropTypes } from 'react';
import './styles.css';

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
			<div>
				<header style={{ background: this.props.color }} className='header'>
					header
				</header>
				{this.props.children}
			</div>
		);
	}
}
