/**
 * Created by ASUS on 2016/6/2.
 */
var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();
var port = 5800;

app.use(compression);

var expireTime = 2592000000;
app.use(express.static(path.join(__dirname,'./dist'),{maxAge:expireTime}));

app.listen(port,function(error){
    if(error){
        console.error(error);
    } else {
        console.info("listening on port %s.Open up http://localhost:%s/ in your browser",port,port);
    }
})