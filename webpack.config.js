'use strict';

var path = require('path'),
    webpack = require('webpack'),
    bowerPath = path.join(__dirname, 'bower_components'),
    BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: './app.js',
    context: path.join(__dirname, 'app/src/'),
    resolve: {
        root: [bowerPath]
    },
    plugins: [
        new BowerWebpackPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ],
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'bundle.js'
    },
    module: {
        noParse: [
           /\.min\.js/, bowerPath
        ],
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    }
};
