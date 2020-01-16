var fs = require('fs');
var readableStream = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
var writableStream = fs.createWriteStream('copy.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});

readableStream.on('end', function() {
    writableStream.end();
    console.log("File Copied Successfully");
});