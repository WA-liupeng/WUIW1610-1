var express = require('express');
var app = express();
var fs=require("fs");

app.use(function (req,res,next) {
    var t = new Date().toLocaleTimeString();
    fs.appendFile('./log.txt',t+"\n",function (err) {
        if(err) throw err ;
    });
    next();
})
app.get('/',function (req,res) {
    res.send("shouye")
})
app.get('/list',function (req,res) {
    res.send("shouye liebiao")
})


var server = app.listen(8020,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})
