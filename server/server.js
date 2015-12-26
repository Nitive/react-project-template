import portscanner from 'portscanner';
import express from 'express';
import webpack from 'webpack';
import debuga from 'express-debuga';
import 'colors';
const argv = require('yargs').argv;

let getPrerenderedMakeup;
try {
	getPrerenderedMakeup = require('../build/prerender/bundle');
} catch (err) {
	getPrerenderedMakeup = () => '';
}

const buildOptions = {};
if (argv.breakpoints) {
	buildOptions.breakpoints = true;
}
if (argv.optimize) {
	buildOptions.optimize = true;
}

import makeConfig from '../utils/make-webpack-config';
const config = makeConfig(buildOptions);
const compiler = webpack(config);

const app = express();
app.set('view engine', 'jade');
app.set('views', '.');



if (process.env.NODE_ENV !== 'production') {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			colors: true,
		},
	}));

	app.use(require('webpack-hot-middleware')(compiler));
	app.use(require('express-open-in-editor')());
	app.use(require('morgan')('dev'));
	app.use(debuga());
}

app.use(express.static('./build/public'));


app.get('*', (req, res) => {
	const application = getPrerenderedMakeup(req);
	res.render('./index', { content: application });
});

portscanner.findAPortNotInUse(3000, 3010, 'localhost', (error, foundedPort) => {
	if (error) {
		console.log(error);
		return;
	}
	const port = process.env.PORT || foundedPort;
	app.listen(port, 'localhost', err => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(`Listening at ${`http://localhost:${port}`.underline.magenta}`);
	});
});
