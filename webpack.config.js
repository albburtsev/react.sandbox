'use strict';

var path = require('path'),
    webpack = require('webpack'),
    bowerPath = path.join(__dirname, 'bower_components'),
    nodePath = path.join(__dirname, 'node_modules'),
    BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: './app.js',
    context: path.join(__dirname, 'src/'),
    resolve: {
        root: [bowerPath]
    },
    resolveLoader: {
        root: [nodePath]
    },
    plugins: [
        new BowerWebpackPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react',
            'Block': 'bem-cn'
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
                test: /\.js$/,
                exclude: bowerPath,
                loader: 'babel-loader'
            }
        ]
    }
};
