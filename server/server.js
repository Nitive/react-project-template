import portscanner from 'portscanner';
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import debuga from 'express-debuga';
import 'colors';
const argv = require('yargs').argv;

const buildOptions = {};
if (argv.breakpoints) {
	buildOptions.breakpoints = true;
}
if (argv.optimize) {
	buildOptions.optimize = true;
}

import makeConfig from '../utils/make-webpack-config';
const config = makeConfig(buildOptions);
const app = express();
const compiler = webpack(config);


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

app.use(express.static('build'));


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
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
