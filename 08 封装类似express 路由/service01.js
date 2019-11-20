var http = require('http');
var app = require('./router01');
var ejs = require('ejs');

http.createServer(app).listen(8002);


app.get('login',function(req,res){
    ejs.renderFile('views/form.ejs',{title: '登录'},function (err,data) {
        res.end(data);
    })
})

app.get('register',function(req,res){
    res.end('register');
})

app.post('dologin',function(req,res){
    console.log(req.body)
    res.end('dologin');
})

app.get('404',function(req,res){
    res.send('页面未找到');
})

app.get('home',function(req,res){
    res.send('home');
})