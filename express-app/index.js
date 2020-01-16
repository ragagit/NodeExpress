var express = require('express');

var webapp = express();

webapp.get('/',function(request,response){
  response.send('<h1>Welcome To Express Web App</h1>');
});

webapp.get('/about',function(request,response){
   response.send("About Express Application and Route");
});

webapp.get('/company/:name?',function(request,response){
   var data = request.params.name;
   response.send("You passed " + data);
});

webapp.get('/company/:name?/:title?',function(request,response){
   var data = request.params.name;
   var title = request.params.title;
   response.send("You passed " + data+ " title "+title);
});

webapp.get('*',function(request,response){
   response.send("Oops Page does not exist");
});

var server = webapp.listen(8080,function(){
 console.log("Server running on port : 8080");
});