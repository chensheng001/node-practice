var ejs = require('ejs');
var querystring = require('querystring');

var app = {
    login: function (req,res) {
        var title = '<h1>这是login页面</h1>';
        ejs.renderFile('views/form.ejs',{title: title},function (err,data) {
            res.end(data);
        });
    },
    dologin: function(req,res) {
        if (req.method === 'POST') {
            var postData = '';
            req.on('data',function (postDataChunk) {
                postData += postDataChunk;
            });
            req.on('end',function () {
                req.query = postData;
                console.log(querystring.parse(postData));
            });
            ejs.renderFile('views/dologin.ejs',{},function (err,data) {
                res.end(data);
            });
        }else {
            console.log(url.parse(req.url,true).query)
            ejs.renderFile('views/dologin.ejs',{},function (err,data) {
                res.end(data);
            });
        }
    },
    home: function (req,res) {
        var inputData = {
            msg: '这是index传入的数据',
            list: ['111','222','333']
        };
        ejs.renderFile('views/index.ejs',inputData,function (err,data) {
            res.end(data);
        });
    },
    404: function (req,res) {
        res.end('404------页面未找到')
    }
};

module.exports = app;
