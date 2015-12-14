/**
 * Created by apache on 15-12-13.
 */
var webpack = require('webpack');
var path  = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        bundle: [path.resolve(__dirname, 'app/main.js')],
        common: ['alt','react','react-router','react-dom','underscore']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: false,
    plugins: [
        new commonsPlugin({
            name : 'common',
            filename : 'common.js',
            minChunks : 3
        })
    ]
};
