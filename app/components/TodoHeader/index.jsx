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
		if (event.keyCode !== ENTER_KEY) return;
		event.preventDefault();
		this.props.addTodo(event.target.value);
		event.target.value = '';
	}


	render() {
		return (
			<input
				styleName='input'
				placeholder='What needs to be done?'
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
}
