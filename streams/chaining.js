var zlib = require('zlib');
var fs = require('fs');

var readableStream = fs.createReadStream('/Users/raga/Documents/NodeJS/events/sample.txt');
var writableStream = fs.createWriteStream('chain.txt.gz');

var gzip = zlib.createGzip();

readableStream   // reads from sample.txt
  .pipe(gzip)  // compresses
  .pipe(writableStream)  // writes to chain.txt.gz
  .on('finish', function () {  // finished
    console.log('Zip File Created Successfully');
  });