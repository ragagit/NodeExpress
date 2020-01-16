var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
    //establishing connection
    var mysqlcon = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Junk1234",
            database:"skillbakery"
    });

    mysqlcon.query("select id,title,price,description,image,isPopular from courses",function(err,rows) {
    if(err) 
        throw err;
    else
    {
        // wrap result-set as json
        req.app.locals.webdata=({'courses' : rows});
        res.render('index', { title: 'SkillBakery Courses',active:"index" });
        //console.log( app.locals.webdata);
    }
    
  });  
  
});

//about route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About SkillBakery',active:"about" });
});

router.get('/courses', function(req, res, next) {
     //establishing connection
    var mysqlcon = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Junk1234",
            database:"skillbakery"
    });

    mysqlcon.query("select id,title,price,description,image,isPopular from courses",function(err,rows) {
    if(err) 
        throw err;
    else
    {
        // wrap result-set as json
        req.app.locals.webdata=({'courses' : rows});
        res.render('courses', { title: 'SkillBakery Courses',active:"courses"});
    }
    
  });  
  
});

router.get('/courses/:id?', function(req, res, next) {
     //establishing connection
    var mysqlcon = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Junk1234",
            database:"skillbakery"
    });

    mysqlcon.query("select id,title,price,description,image,isPopular from courses",function(err,rows) {
    if(err) 
        throw err;
    else
    {
        // wrap result-set as json
        req.app.locals.webdata=({'courses' : rows});
        res.render('courses', { title: 'Course Details',active:"courses", id:req.params.id });
    }
    
  });  
 
});

module.exports = router;
