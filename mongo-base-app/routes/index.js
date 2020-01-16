var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/skillbakery');
//do not use this one - use your own mongolab url
//mongoose.connect('mongodb://admin:dbpass@ds051595.mongolab.com:51595/skillbakery');
// Mongoose Schema definition
var Schema = mongoose.Schema;

var CoursesSchema = new Schema({
        id: Number,
        title: {type:String},
        price: Number,
        description:String,
        image:String,
        isPopular:Boolean
});

var Courses = mongoose.model('courses', CoursesSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
    
    Courses.find({}, function (err, docs) {
        req.app.locals.webdata=({"courses":docs});
        res.render('index', { title: 'SkillBakery Courses',active:"index" });
    });
  
});

//about route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About SkillBakery',active:"about" });
});

router.get('/courses', function(req, res, next) {
     Courses.find({}, function (err, docs) {
        req.app.locals.webdata=({"courses":docs});
        res.render('courses', { title: 'SkillBakery Courses',active:"courses"});
     });
});

router.get('/courses/:id?', function(req, res, next) {
     Courses.find({}, function (err, docs) {
        req.app.locals.webdata=({"courses":docs});
        res.render('courses', { title: 'Course Details',active:"courses", id:req.params.id });
     });
  
});

module.exports = router;
