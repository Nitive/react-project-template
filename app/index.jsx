import React from 'react';
import { render } from 'react-dom';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import createHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';


const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

const router = (
	<Router history={history}>
		{routes}
	</Router>
);


const content = () => {
	if (process.env.NODE_ENV === 'development') {
		const DevTools = require('./containers/DevTools');
		return (
			<div>
				{router}
				<DevTools />
			</div>
		);
	}
	return router;
}();

const app = (
	<Provider store={store}>
		{content}
	</Provider>
);

render(app, document.getElementById('root'));
