
exports.getmime = function (fs,str,EventEmitter) {
    fs.readFile('mime.json',function (err,data) {
       if (err) {
           console.log(err);
       }
       var Mime = JSON.parse(data.toString())[str] || 'text/html';
       EventEmitter.emit('to_parent_mime',Mime);
    });
};