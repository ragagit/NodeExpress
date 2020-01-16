var fs = require('fs');

function readFile(filename,enc){
    return new Promise(function(resolve,reject){
       fs.readFile(filename,enc,function(err,content){
          if(err) reject(err);
          else resolve(content); 
       });
    });
}

readFile('sample.txt','utf8')
    .then(content=>
    {
        console.log(content);
        readFile('demo.txt','utf8')
            .then(content=>{console.log(content)})
            .catch(error=>{console.log(error)});
    })
   .catch(error => {console.log(error)});