
exports.getmime = function (fs,str) {
    var obj = JSON.parse(fs.readFileSync('mime.json').toString());
    return obj[str];
};