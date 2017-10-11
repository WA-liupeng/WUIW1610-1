const express = require('express');
var app = express();
// app.get('/ab?c',function (req,res) {
//     res.send("访问成功 ?");
// })
// app.get('/ex+c',function (req,res) {
//     res.send("访问成功 +");
// })
// app.get('/ae*c',function (req,res) {
//     res.send("访问成功 *");
// })
app.get('/ab(cd)?e', function(req, res) {
    res.send('访问成功');
});

// 路由句柄
// app.get('/',function (req,res,next) {
//     console.log("1");
//     next(); //调用下一个函数
// },function (req,res,next) {
//     console.log("2");
//     next();
// },function (req,res) {
//     console.log("3");
//     res.send("hello");
// })
var server = app.listen(8040,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})