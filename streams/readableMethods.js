var fs = require('fs');

var readableStream = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
var content = '';


readableStream.on('data', function(chunk) {
    console.log(chunk.toString());
    content+=chunk;
    readableStream.pause();
    console.log("Stream Paused");
    resumeStream();
});

readableStream.on('end', function() {
    console.log(content);
});

function resumeStream(){  
    setTimeout(function(){
        console.log("Resuming Now...");
        readableStream.resume();
    },2000);
}