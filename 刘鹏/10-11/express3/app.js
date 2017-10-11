var express = require('express');
var app = express();


// 静态资源
// app.use(express.static());
var home = require("./routers/home");
var news = require("./routers/news");
var product = require("./routers/product");

app.use('/',home);
app.use('/news',news);
app.use('/product',product);

app.listen(8050);