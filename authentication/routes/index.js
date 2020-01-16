var express = require('express');
var router = express.Router();

module.exports = function(passport){
    
    /* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any display message, if any
		res.render('index', { message: req.flash('message') });
	});
    
    router.post('/login', passport.authenticate('login', {
		successRedirect: '/dashboard',
		failureRedirect: '/',
		failureFlash : true  
	}));
    
    /* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});
    
    router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/dashboard',
		failureRedirect: '/signup',
		failureFlash : true  
	}));
    
    /* GET Dashboard Page */
	router.get('/dashboard', isAuthenticated, function(req, res){
		res.render('dashboard', { user: req.user });
	});
    
    router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
    
    return router;

}

var isAuthenticated = function (req, res, next) {
    
    if (req.isAuthenticated())
		return next();
        
    res.redirect('/');
}