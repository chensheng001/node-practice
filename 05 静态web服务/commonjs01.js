var url = require('url');
var http = require('http');
var path = require('path');
var fs = require('fs');
var mimeModel = require('./model/getmime');


var app = http.createServer(function (req, res) {

    var pathname = url.parse(req.url, true).pathname;
    if (pathname === '/') {
        pathname = '/index.html';
    }

    if (req.url !== '/favicon.ico') {

        var extname = path.extname(pathname);
        fs.readFile('static'+pathname,function (err,data) {
            if (err) {
                fs.readFile('static/404.html',function (error,result) {
                    if (error) {
                        console.log(error)
                    }
                    res.writeHead(404, {"Content-Type": "text/html;charset='uft-8'"});
                    res.write(result);
                    res.end();
                });
            }else {

                var mimename = mimeModel.getmime(fs, extname);

                res.writeHead(200, {"Content-Type": mimename + ";charset='uft-8'"});
                res.write(data);
                res.end();
            }
        })

    }
});
app.listen('8001', '127.0.0.1');