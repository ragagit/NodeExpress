var fs = require('fs');

function* readFile(filename,enc){
    yield fs.readFile(filename,enc,callback);
}

function callback(err,content)    {
     if(err){
        console.error(err);
    }
    else{
        console.log(content.toString());
        console.log("File Read Successfully");
    }

}

var output = readFile('/Users/raga/Documents/NodeJS/event/sample.txt','utf8');
run(output);


function run(output) {
    output.next();
}