var fs = require('fs');

var content = fs.readFileSync('/Users/raga/Documents/NodeJS/events/sample.txt');
console.log(content.toString());
console.log("File Read Successfully");