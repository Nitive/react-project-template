import path from 'path';
import express from 'express';
import webpack from 'webpack';
import makeConfig from '../utils/make-webpack-config';

const config = makeConfig();
const app = express();
const compiler = webpack(config);

console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === 'development') {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
	}));

	app.use(require('webpack-hot-middleware')(compiler));
	app.use(require('morgan')('dev'));
}

app.use(express.static('static'));


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, 'localhost', err => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(`Listening at http://localhost:${port}`);
});
