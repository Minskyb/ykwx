/**
 * Created by ASUS on 2016/6/2.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devTool:'source-map',
    entry:[
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/static/'
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css')
    ],
    module:{
        loaders:[
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
            },
            {
                test:/\.js$/,
                loaders:['react-hot','babel'],
                exclude:/node_modules/,
                include:__dirname
            }
        ]
    }
}