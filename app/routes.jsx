import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import IndexPage from 'containers/IndexPage';
import TestPage from 'containers/TestPage';
import AnotherPage from 'containers/AnotherPage';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={IndexPage} />
		<Route path='/test' component={TestPage} />
		<Route path='/another' component={AnotherPage} />
		<Redirect from='*' to='/' />
	</Route>
);
