
exports.getmime = function (fs,str,callback) {
    fs.readFile('mime.json',function (err,data) {
       if (err) {
           console.log(err);
       }
       callback(JSON.parse(data.toString())[str])
    });
};