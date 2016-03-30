/**
 * Created by apache on 15-12-13.
 */
var webpack = require('webpack');
var path  = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery.min.js$/);

module.exports = {
    entry: {
        bundle: [path.resolve(__dirname, 'app/main.js')],
        common: ['alt','react','react-router','react-dom','underscore','markdown']
        //amd : ['app/components/NotFound','app/components/Pagination','app/components/Star']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: 'app/',
        chunkFilename: "[name].chunk.js"//给require.ensure用
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
    extenals : {
        'jquery': 'public/js/lib/jquery.min'
    },
    devtool: false,
    plugins: [
        new commonsPlugin({
            name : 'common',
            filename : 'common.js',
            minChunks : Infinity
        }),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: true
        //    }
        //}),
        ignoreFiles
    ]
};
