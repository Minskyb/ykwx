/**
 * Created by ASUS on 2016/6/2.
 */
var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev');
var express = require('express');

var app = new express();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath,
    hot:true,
    color:true
}));

app.use(webpackDevMiddleware(compiler));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'src/index.html'));
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info(" Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})