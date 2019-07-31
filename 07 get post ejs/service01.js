var http = require('http');
var url = require('url');
var router = require('./model/router');

http.createServer(function (req,res) {

    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});

    var pathname = url.parse(req.url).pathname.replace('/','');
    if (pathname === '') pathname = 'home';

    if (pathname !== '/favicon.ico') {
        try {
            router[pathname](req,res);
        }catch (e) {
            router['404'](req,res);
        }
    }

}).listen(8001);