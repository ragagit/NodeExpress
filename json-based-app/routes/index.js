var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'SkillBakery Courses',active:"index" });
});

//about route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About SkillBakery',active:"about" });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'SkillBakery Courses',active:"courses"});
});

router.get('/courses/:id?', function(req, res, next) {
  res.render('courses', { title: 'Course Details',active:"courses", id:req.params.id });
});

module.exports = router;
