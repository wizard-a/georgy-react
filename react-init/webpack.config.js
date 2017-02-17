'use strict';
let debug = process.env.NODE_ENV !== "production";
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// GLOBALS
let GlobalPlugin = new webpack.DefinePlugin({
    DEBUG: debug
});

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',   // enable es6 async function
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/,
            include: __dirname
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    plugins: [
        GlobalPlugin,
        new HtmlWebpackPlugin({
            title: 'Project name',
            filename: path.join(__dirname, '/dist/index.html'),
            hash: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        root: path.join(__dirname, 'src')
    }
}
