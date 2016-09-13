/**
 * Created by ASUS on 2016/6/2.
 */
var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();
var port = 8080;

// 加入 Gzip 压缩，或导致路由访问不到资源，此问题留待后续解决。
// app.use(compression);

var expireTime = 2592000000;
app.use(express.static(path.join(__dirname,'./dist')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./dist/index.html'));
})

app.listen(port,function(error){
    if(error){
        console.error(error);
    } else {
        console.info("listening on port %s.Open up http://localhost:%s/ in your browser",port,port);
    }
})