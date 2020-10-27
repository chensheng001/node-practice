var http = require('http');
var url = require('url');

http.createServer((req,res) => {

    /*社会HTTP头部*/
    res.writeHead(200,{'Content-type': "text/html;chart-set='utf-8'"});

    if (req.url !== '/favicon.ico') {
        const result = url.parse(req.url, true); /*true参数表示将get传值转换成对象*/
        console.log(result.query)
    }

    res.write('hello2');
    res.end();
}).listen(8001, '127.0.0.1');
