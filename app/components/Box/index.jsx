import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


@CSSModules(styles)
export default class Box extends React.Component {
	render() {
		return (
			<div styleName='box'>box</div>
		);
	}
}
