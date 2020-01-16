var fs = require('fs');

function* readFiles(){
    yield fs.readFile("sample.txt","utf8",callback);
    yield fs.readFile("demo.txt","utf8",callback);
}

function callback(err,content)    {
     if(err){
        console.error(err);
    }
    else{
        console.log(content.toString());
    }

}

var output=readFiles();

run(output);


function run(output) {
   var gen = output;

  function nextItem(err, result) {
    var item = gen.next(result);

    if (!item.done) {
      nextItem();
    }
  }

  nextItem();
}