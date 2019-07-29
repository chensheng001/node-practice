var fs = require('fs');
/*fs.mkdir('js',function (err) {
    console.log(err)
});*/

/*fs.writeFile('js/text.js','sss222',function (err) {
    console.log(err)
})*/

/*fs.stat('html' ,function (err,stat) {
    console.log(stat.isFile())
    console.log(stat.isDirectory())
})*/

/*fs.appendFile('html/index.html','222\n',function (err) {
    console.log(err)
})*/

/*fs.readFile('html/index.html',function (err,data) {
    console.log(data.toString())
})*/

/*fs.rename('html/index.html','html/news.html',function (err) {
    console.log(err)
})*/

/*fs.readdir('html',function (err,data) {
    console.log(data)
})*/

/*fs.unlink('css/text.txt',function (err) {
    console.log(err)
})*/

/*fs.rmdir('css',function (err) {
    console.log(err)
})*/


//遍历所有04fs模块中的目录
/*var dirArr=[];
fs.readdir('./',function (err,files) {

    //立即自执行函数
    (function readFile(i) {

        if (i === files.length) {
            console.log(dirArr)
        }else {
            fs.stat('./'+files[i],function (err,stats) {
                if (err) {
                    console.log(err);
                    return false
                }
                if (stats.isDirectory()) {
                    dirArr.push(files[i])
                }

                readFile(i+1)
            })
        }
    })(0)
})*/


