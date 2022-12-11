var fs = require('fs');
var dir = process.argv[2];
if (!fs.existsSync('files')) {
    fs.mkdirSync('files');
}
fs.mkdirSync('files/' + dir);