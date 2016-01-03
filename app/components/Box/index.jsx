import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export default class Box extends React.Component {

	static propTypes = {
		color: PropTypes.string,
	}

	static defaultProps = {
		color: 'yellowgreen',
	}


	render() {
		return (
			<div data-gemini='box' styleName='box' style={{ backgroundColor: this.props.color }}>
				<div styleName='text'>
					box
				</div>
			</div>
		);
	}
}
