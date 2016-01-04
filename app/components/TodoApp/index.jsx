import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import TodoHeader from 'components/TodoHeader';
import TodoMainSection from 'components/TodoMainSection';
import TodoFooter from 'components/TodoFooter';


const TodoApp = props => (
	<div styleName='todoapp'>
		<h1 styleName='title'>todos</h1>
		<TodoHeader />
		<TodoMainSection />
		<TodoFooter />
	</div>
);

export default CSSModules(TodoApp, styles);
