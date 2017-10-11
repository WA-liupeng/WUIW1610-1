var express=require("express");
var app=express();

app.set("views","./views");
app.set("view engine","ejs");

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey2',h1:"只是测试", message: 'Hello there!',key:"判断",xunhuan:[12,23,45]});
});

app.listen(8040);