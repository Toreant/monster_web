/**
 * Created by apache on 15-12-13.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        entry1: ['./app/routes.js','./app/main.js']
    },
    output: {
        path: __dirname+'/public/js',
        filename: '[name].entry.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react' : 'react',
        'react-router' : 'react-router'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/, loader: "babel-loader"
        }, {
            test: /\.jsx?$/,
            exclude : /node_modules/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [commonsPlugin]
};