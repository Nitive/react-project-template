import React from 'react';
import TodoApp from 'components/TodoApp';


export default class IndexPage extends React.Component {
	render() {
		return (
			<div>
				<h1>todos</h1>
				<TodoApp />
			</div>
		);
	}
}
