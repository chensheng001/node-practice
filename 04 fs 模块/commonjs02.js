var fs = require('fs');

/*读取流*/
/*var fileReadStream = fs.createReadStream('data/input.txt');
var inputStr=''
fileReadStream.on('data',function (str) {
    inputStr +=str;
});

fileReadStream.on('end',function () {
  console.log(inputStr)
  console.log('------end----')
})

fileReadStream.on('error',function (err) {
    console.log(err);
})*/


/*写入流*/
/*var fileWriteStream = fs.createWriteStream('data/output.txt');
fileWriteStream.write('----------我是写入的数据','utf8');

fileWriteStream.end();

fileWriteStream.on('finish',function () {
    console.log('写入完成')
})

fileWriteStream.on('error',function (err) {
    console.log(err)
})*/


/*管道流*/
/*var fileReadStream = fs.createReadStream('data/aaa.png');
var fileWriteStream = fs.createWriteStream('data/bbb.png');
fileReadStream.pipe(fileWriteStream);*/


































