import path from 'path';
import webpack from 'webpack';
import loadersByExtension from './loadersByExtension';

const loadersByExt = loadersByExtension({
	'json': 'json',
	'yaml|yml': 'json!yaml',
	'png|jpg|cur|gif': 'url?limit=5000',
	'woff|woff2': 'url?limit=1',
	'svg': 'url?limit=10000',
	'css': 'style!css',
	'styl': 'style!css!stylus?paths=node_modules',
});

const root = path.join(__dirname, '..');
const debug = process.env.NODE_ENV === 'development';
const devEntry = ['webpack-hot-middleware/client', 'component-inspector/dist/react'];

export default function makeWebpackConfig(opts = {}) {
	const options = {
		optimize: false,
		breakpoints: false,
		...opts,
	};

	const config = {
		entry: (debug ? devEntry : []).concat([
			'./app/index',
		]),
		output: {
			path: path.join(root, 'static/build'),
			filename: 'bundle.js',
			publicPath: '/build',
		},

		plugins: [
			new webpack.DefinePlugin({
				OPTIMIZED: options.optimize,
				OPEN_FILE_URL: '"/open-in-editor"',
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				},
			}),
		],

		devtool: (debug && !options.breakpoints) ? '#cheap-module-eval-source-map' : '#source-map',
		bail: !debug,
		debug: debug,

		resolve: {
			root: path.join(root, 'app'),
			extensions: ['', '.js', '.jsx'],
			modulesDirectories: ['app', 'node_modules'],
		},

		resolveLoader: {
			root: [
				path.join(root, 'node_modules'),
				root,
			],
		},
		babel: {
			plugins: [
				require('babel-plugin-react-display-name'),
				require('babel-plugin-source-wrapper').configure({
					basePath: process.cwd(),
					runtime: true,
				}),
			],
		},

		module: {
			loaders: loadersByExt.concat([
				{
					test: /\.jsx?$/,
					loader: 'babel',
					include: path.join(root, 'app'),
				},
			]),
		},
	};

	if (options.optimize) {
		config.plugins.push(
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
		);
	} else {
		config.plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
		);
	}

	return config;
}
