import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export default class Box {

	static propTypes = {
		color: PropTypes.string,
	}


	static defaultProps = {
		color: 'yellowgreen',
	}


	render() {
		const code = `
			=>
			===
			!==
			<=
			<!-- www -->
			@decorator
			#{}
			!!var
		`;
		return (
			<div styleName='box' style={{ backgroundColor: this.props.color }}>
				<code>
					<pre>
						{code}
					</pre>
				</code>
			</div>
		);
	}
}
