import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


function Box(props) {
	return (
		<div styleName='box' style={{ backgroundColor: props.color }}>
			box
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
