require('babel-register');
require('webpack');
require('karma-webpack');
const webpackConfig = require('./utils/make-webpack-config').default();
webpackConfig.devtool = 'inline-source-map';


module.exports = config => {
	const browsers = ['Chrome'];

	config.set({
		autoWatch: true,
		browsers,
		singleRun: false,
		frameworks: ['mocha', 'chai-things', 'chai'],
		preprocessors: {
			'utils/tests.webpack.js': ['webpack', 'sourcemap'],
		},
		files: [
			'node_modules/phantomjs-polyfill/bind-polyfill.js',
			'utils/tests.webpack.js',
		],
		reporters: ['mocha'],
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true,
		},
	});
};
