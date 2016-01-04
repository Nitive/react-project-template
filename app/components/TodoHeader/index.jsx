import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


const TodoHeader = props => (
	<input styleName='input' placeholder='What needs to be done?' />
);

export default CSSModules(TodoHeader, styles);
