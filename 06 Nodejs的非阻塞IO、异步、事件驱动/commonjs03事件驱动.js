var http = require('http');
var router = require('./model/router');

var app = http.createServer(function (req, res) {
    router.statics(req,res,'static')
});
app.listen('8005', '127.0.0.1');