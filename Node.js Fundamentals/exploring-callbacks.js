//exploring callbacks

fs.readFile('sample.txt',function(err,data){
 if(err) return console.log(err);
   console.log(data.toString());
});

function onComplete(err,data){
   if(err) return console.log(err);
     console.log(data.toString());
}

fs.readFile('sample.txt',onComplete);