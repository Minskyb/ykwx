/**
 * Created by ASUS on 2016/6/2.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool:'source-map',
    entry:[
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output:{
        path:path.join(__dirname,'dist','static'),
        filename:'bundle.js',
        publicPath:'/static/'
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loaders:[
            {
                test: /\.(gif|jpg|png|woff|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!'+
                    'less?sourceMap'
                )
            },
            {
                test:/\.js$/,
                loaders:['react-hot','babel'],
                exclude:/node_modules/,
                include:__dirname
            },
            {
                test: /\.svg$/,
                loader: 'babel!react-svg'
            }
        ]
    }
}