import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoApp from 'components/TodoApp';
import * as TodoActions from 'actions/todos';


@connect(
	store => ({ todos: store.todos }),
	dispatch => ({ actions: bindActionCreators(TodoActions, dispatch) }),
)
export default class IndexPage extends React.Component {
	render() {
		return <TodoApp {...this.props} />;
	}
}
