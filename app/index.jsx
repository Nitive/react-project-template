import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import createHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';
import reducer from 'reducers/index';


const store = createStore(reducer);
const history = createHistory();

syncReduxAndRouter(history, store);

const router = (
	<Router history={history}>
		{routes}
	</Router>
);

const app = (
	<Provider store={store}>
		{router}
	</Provider>
);

render(app, document.getElementById('root'));
