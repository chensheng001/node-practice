var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

/*指定模板位置 ，默认模板位置在 views*/
//app.set('views','./myViews');

app.get('/', function (req, res) {
    res.send('index');
});

app.get('/news', function (req, res) {
    var news = ['我是新闻啊','我也是啊'];
    res.render('news', {news:news})
});

app.get('/user', function (req, res) {
    res.render('user')
});

app.listen('3003', '127.0.0.1');