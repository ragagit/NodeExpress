var fs=require('fs');
fs.readFile('/Users/raga/Documents/NodeJS/events/sample.txt',function(err, data){
	if(data != null)
		console.log(data.toString());
	else
		console.log("Unable to open file");
});

var EventEmitter = require('events').EventEmitter;
var log = new EventEmitter();

log.on('info',function(msg){
	console.log('Info:'+msg);
})

log.emit('info','learning Events in Node.js');