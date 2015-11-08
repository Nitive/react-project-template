import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Index from 'containers/page-index';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Index} />
	</Route>
);
