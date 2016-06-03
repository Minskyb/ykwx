/**
 * Created by ASUS on 2016/6/2.
 */

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:[
        './src/index'
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/static/'
    },
    plugins:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css')  // 把所有样式文件抽取到 styles 中。
    ],
    module:{
        loaders:[
            {
                test:/\.less$/,
                loaders:['style','css','less']  // 配置了次文件后，在 code 中引入 html 文件只需和普通引用一样，无需其它前缀。
            },
            {
                test:/\.js$/,
                loaders:['babel'],
                exclude:/node_modules/,
                include:__dirname
            }
        ]
    }
}