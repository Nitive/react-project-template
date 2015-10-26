/* eslint-disable */

var webpack = require('webpack');
var webpackConfig = require('./utils/make-webpack-config')();


module.exports = function(config) {
  var browsers = [process.env.DEBUG ? 'Chrome' : 'PhantomJS'];

  config.set({
    autoWatch: true,
    browsers: browsers,
    singleRun: false,
    frameworks: ['mocha', 'chai-things', 'chai'],
    preprocessors: {
      '../tests.webpack.js': ['webpack'],
    },
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      '../tests.webpack.js',
    ],
    reporters: ['mocha'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
