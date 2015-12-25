import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


function Box(props) {
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
		<div styleName='box' style={{ backgroundColor: props.color }}>
			<code>
				<pre>
					{code}
				</pre>
			</code>
		</div>
	);
}

Box.propTypes = {
	color: PropTypes.string,
};

Box.defaultProps = {
	color: 'yellowgreen',
};

export default CSSModules(Box, styles);
