var fs= require('fs');
var readable = fs.createReadStream('sample.txt'); 
var writable=fs.createWriteStream('copy-unpipe.txt');
 
readable.pipe(writable);
 
readable.on('end',function(){
 
    readable.unpipe(writable);
 
});