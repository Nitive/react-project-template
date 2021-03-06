import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const ENTER_KEY = 13;

@CSSModules(styles)
export default class TodoHeader extends React.Component {

	static propTypes = {
		addTodo: PropTypes.func.isRequired,
	}


	handleKeyDown = event => {
		const value = event.target.value.trim();
		if (!value) return;
		if (event.keyCode !== ENTER_KEY) return;
		event.preventDefault();
		this.props.addTodo(value);
		event.target.value = '';
	}


	render() {
		return (
			<input
				maxLength={140}
				styleName='input'
				placeholder='What needs to be done?'
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
}
