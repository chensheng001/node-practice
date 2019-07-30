var path = require('path');
var fs = require('fs');
var url = require('url');
var mimeModel = require('./getmimeByEvent');
var events = require('events');
var EventEmitter = new events.EventEmitter();

exports.statics = function (req,res,staticPath) {
    var pathname = url.parse(req.url, true).pathname;
    if (pathname === '/') {
        pathname = '/index.html';
    }
    if (req.url !== '/favicon.ico') {

        var extname = path.extname(pathname);
        fs.readFile(staticPath+pathname,function (err,data) {
            if (err) {
                fs.readFile(staticPath + '/404.html',function (error,result) {
                    if (error) {
                        console.log(error)
                    }
                    res.writeHead(404, {"Content-Type": "text/html;charset='uft-8'"});
                    res.write(result);
                    res.end();
                });
            }else {

                mimeModel.getmime(fs, extname , EventEmitter);
                EventEmitter.on('to_parent_mime',function (mimename) {
                    res.writeHead(200, {"Content-Type": mimename + ";charset='uft-8'"});
                    res.end(data);
                })
            }
        })

    }
}