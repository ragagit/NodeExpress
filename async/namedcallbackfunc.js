var fs = require('fs');

fs.readFile("sample.txt",callback);

function callback(err,content){
 
    if(err){
        console.error(err);
    }
    else{
        console.log(content.toString());
        fs.readFile("demo.txt",callbackDemo);
    }

}

function callbackDemo(err,content){
    if(err){
        console.error(err);
    }
    else{
        console.log(content.toString());
    }

}