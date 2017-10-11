var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log("中央")
    req.money=10000;
    next();
});

app.use(function (req, res, next) {
    console.log("省里")
    req.money-=4000;
    next();
});
app.use(function (req, res, next) {
    console.log("市里")
    req.money-=2000;
    next();
});
app.use(function (req, res, next) {
    console.log("县里")
    req.money-=2000;
    next();
});
app.use(function (req, res, next) {
    console.log("镇里")
    req.money-=1000;
    next();
});
app.use(function (req, res, next) {
    console.log("乡里")
    req.money-=500;
    next();
});
app.get('/',function (req,res) {
     res.send(req.money+"");
})
app.listen(8050);