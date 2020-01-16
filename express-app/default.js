var express = require('express');

var webapp = express();

webapp.set('view engine','ejs');
webapp.set('views', __dirname+'/views')
var date = new Date();
var year=date.getFullYear();

webapp.locals.footnote = "© "+year;

webapp.get('/',function(request,response){
  //response.send('<h1>Welcome To Express Web App</h1>');
  response.render('index',{
      title:'Express EJS',
      courses:['Master NodeJS','Master EmberJS']
  });
});

webapp.get('/courses',function(request,response){
  //response.send('<h1>Welcome To Express Web App</h1>');
  response.render('courses.ejs',{
      title:'Our Courses',
      courses:['Master NodeJS','Master EmberJS']
  });
});



var server = webapp.listen(8080,function(){
 console.log("Server running on port : 8080");
});