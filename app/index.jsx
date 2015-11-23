import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import routes from './routes';
import reducer from 'reducers/index';
import 'styles/app.styl';


const createStoreWithMiddleWare = compose(
	reduxReactRouter({
		routes,
		createHistory,
	}),
)(createStore);

const store = createStoreWithMiddleWare(reducer);

const router = (
	<ReduxRouter routes={routes} />
);

const app = (
	<Provider store={store}>
		{router}
	</Provider>
);

render(app, document.getElementById('root'));
