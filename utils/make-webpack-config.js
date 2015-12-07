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
const entry = [];
const debug = process.env.NODE_ENV !== 'production';

if (process.env.NODE_ENV === 'development') {
	entry.push('webpack-hot-middleware/client');
	entry.push('component-inspector/dist/react');
}

if (process.env.NODE_ENV === 'playground') {
	entry.push('webpack-hot-middleware/client?reload=true');
	entry.push('cosmos-js');
} else {
	entry.push('./app/index');
}

export default function makeWebpackConfig(opts = {}) {
	const options = {
		optimize: false,
		breakpoints: false,
		...opts,
	};

	const config = {
		entry: entry,
		output: {
			path: path.join(root, 'build'),
			filename: 'bundle.js',
			publicPath: '/',
		},

		plugins: [
			new webpack.DefinePlugin({
				OPTIMIZED: options.optimize,
				OPEN_FILE_URL: '"/open-in-editor"',
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				},
				'window.COSMOS_COMPONENTS_PATTERN': /^\.\/(.+)[^(test)]\.jsx?$/,
				'window.COSMOS_GET_FIXTURES_PATTERN': componentName => {
					return new RegExp('./' + componentName + '/([^/]+)fixture.js$');
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
			alias: {
				COSMOS_COMPONENTS: path.join(__dirname, '../app/components'),
				COSMOS_FIXTURES: path.join(__dirname, '../app/components'),
			},
		},

		resolveLoader: {
			root: [
				path.join(root, 'node_modules'),
				root,
			],
		},
		babel: process.env.NODE_ENV !== 'development' ? {} : {
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
