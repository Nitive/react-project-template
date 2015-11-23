import React, { PropTypes } from 'react';

export default class App extends React.Component {

	static propTypes = {
		children: PropTypes.element,
	}


	render() {
		return (
			<div>
				<header>header</header>
				{this.props.children}
			</div>
		);
	}
}
