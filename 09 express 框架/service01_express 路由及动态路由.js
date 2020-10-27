var express = require('express');
var app = new express();


app.get('/',function (req,res) {
    res.send('index');
});

/*动态路由传值*/
app.get('/news/:id',function (req,res) {
    console.log(req.params);
    var id =req.params.id;
    res.send('news'+'---'+id);
});

/*get传值*/
app.get('/news',function (req,res) {
    console.log(req.query);
    var id =req.query.id;
    res.send('news'+'---'+id);
});


app.listen(3000,'127.0.0.1');
