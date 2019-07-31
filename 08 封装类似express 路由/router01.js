var url = require('url');

//封装方法改变res  绑定res.send()
function changeRes(res){

    res.send=function(data){

        res.writeHead(200,{"Content-Type":"text/html;charset='UTF-8'"});

        res.end(data);
    }
}

var Server = function () {
    var G = this;
    this._get = {};
    this._post = {};
    var app = function (req,res) {

        changeRes(res);

        var pathname=url.parse(req.url).pathname;
        if (pathname === '/') {
            pathname = '/home'
        }
        var method = req.method.toLowerCase();

        if(!pathname.endsWith('/')){
            pathname=pathname+'/';
        }

        if (G['_'+method][pathname]) {
            if (method === 'post') {
                let postData = '';
                req.on('data',function (data) {
                    postData+=data;
                });
                req.on('end',function () {
                    req.body = postData;
                    G._post[pathname](req,res);
                });
            }else {
                G._get[pathname](req,res);
            }
        }else{
            G._get['/404/'](req,res);
        }
    };
    /*注册方法*/
    app.get = function (string,callback) {
        if(!string.endsWith('/')){
            string=string+'/';

        }
        if(!string.startsWith('/')){
            string='/'+string;

        }
        G._get[string] = callback;
    };
    app.post = function (string,callback) {
        if(!string.endsWith('/')){
            string=string+'/';

        }
        if(!string.startsWith('/')){
            string='/'+string;

        }
        G._post[string] = callback;
    };
    return app;
};

module.exports = Server();