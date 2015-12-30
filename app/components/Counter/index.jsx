/* @flow */
import React, { PropTypes } from 'react';

export default class Counter extends React.Component {

	static propTypes = {
		start: PropTypes.number,
	}

	constructor(props) {
		super(props);
		this.state = {
			count: props.start,
		};
	}


	addCount = (amount = 1) => () => {
		this.setState({
			count: this.state.count + amount,
		});
	}


	render() {
		return (
			<div>
				{this.state.count}
				<button onClick={this.addCount()}>+</button>
				<button onClick={this.addCount(-1)}>-</button>
			</div>
		);
	}
}
