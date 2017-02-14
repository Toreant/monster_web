/**
 * Created by apache on 15-12-13.
 */
var webpack = require('webpack');
var path  = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery.min.js$/);
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.min.js');

module.exports = {
    entry: {
        bundle: [
            // 写在入口文件之前
            //"webpack-dev-server/client?http://0.0.0.0:3000",
            //"webpack/hot/only-dev-server",
            path.resolve(__dirname, 'app/main.js')
        ],
        common: ['alt','react','react-router','underscore','markdown']
        //amd : ['app/components/NotFound','app/components/Pagination','app/components/Star']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: 'app/',
        chunkFilename: "[name].chunk.js"//给require.ensure用
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'react': pathToReact,
            'react-router': path.resolve(node_modules,'react-router/umd/ReactRouter.min')
        }
    },
    module: {
        noParse: [pathToReact],
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
        //new webpack.HotModuleReplacementPlugin(),
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
