/* eslint-disable */

require('babel/register');
require('webpack');
require('karma-webpack');
var path = require('path');
var webpackConfig = require('./utils/make-webpack-config')();
webpackConfig.devtool = 'inline-source-map';


module.exports = function(config) {
	var browsers = ['Chrome'];

	config.set({
		autoWatch: true,
		browsers: browsers,
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
