var fs = require('fs');

var readableStream = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
var writableStream = fs.createWriteStream('copy-pipe.txt');

readableStream.pipe(writableStream);