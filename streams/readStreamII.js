var fs = require('fs');

var readableStream = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
var content = '';
var chunk;

readableStream.on('readable', function() {
    while((chunk=readableStream.read())!=null){
        content+=chunk;
    }
});

readableStream.on('end', function() {
    console.log(content);
});