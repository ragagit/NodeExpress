var express = require('express');

var webapp = express();
var routes = require('./routes/');

webapp.set('view engine','ejs');
webapp.set('views', __dirname + '/views')

var date = new Date();
var year=date.getFullYear();

webapp.locals.footnote = "© "+year;

webapp.get('/',routes.index);

webapp.get('/courses',routes.courses);

var server = webapp.listen(8080,function(){
 console.log("Server running on port : 8080");
});