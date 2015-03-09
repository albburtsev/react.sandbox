'use strict';

var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './app.js',
    context: path.join(__dirname, 'src/'),
    resolve: {
        root: [path.join(__dirname, 'bower_components')]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
    ],
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'bundle.js'
    },
    module: {
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
