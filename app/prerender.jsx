import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';


const store = configureStore();

export default req => {
	let app;
	const location = createLocation(req.url);

	match({ routes, location }, (error, redirect, renderProps) => {
		app = ReactDOMServer.renderToStaticMarkup(
			<Provider store={store} key='provider'>
				<RoutingContext {...renderProps} />
			</Provider>
		);
	});

	return app;
};
