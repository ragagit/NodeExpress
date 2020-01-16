
var Duplex = require('stream').Duplex;
var fs = require('fs');

Duplex.Readable = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
Duplex.Writable = fs.createWriteStream('duplex.txt');
Duplex.Readable.setEncoding('utf8');

Duplex.Readable.on('data', function(chunk) {
  Duplex.Writable.write(chunk);
});

Duplex.Readable.on('end', function() {
 console.log("Operation Complete");
});