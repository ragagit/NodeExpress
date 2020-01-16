var fs = require('fs');

var readableStream = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
var content = '';

readableStream.on('data', function(chunk) {
    content+=chunk;
});

readableStream.on('end', function() {
    console.log(content);
});