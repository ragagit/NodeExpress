var fs = require('fs');

fs.readFile("sample.txt",function(err,content){
 
    if(err){
        console.error(err);
    }
    else{
        console.log(content.toString());
        console.log("File Sample Read Successfully");
        fs.readFile("demo.txt",function(err,content){
             if(err){
                console.error(err);
            }
            else{
                console.log(content.toString());
                console.log("File Demo Read Successfully");
            }
        });
    }

});