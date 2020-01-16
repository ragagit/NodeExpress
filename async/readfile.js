var fs = require('fs');

fs.readFile("sample.txt",callback);

console.log("Let's proceed with other stuff");

function callback(err,content){
 
    if(err){
        console.error(err);
    }
    else{
        console.log(content.toString());
        console.log("File Read Successfully");
    }

}