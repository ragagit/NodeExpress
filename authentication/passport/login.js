var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt= require('bcrypt-nodejs');

module.exports = function(passport){
passport.use('login',new LocalStrategy({
        passReqToCallback:true
    },
    function(req,username,password,complete){
        User.findOne({ 'username' :  username }, 
                function(err, user) {
                    // In case of any error, return using the complete method
                    if (err)
                        return complete(err);
                    // Username does not exist, log the error and redirect back
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return complete(null, false, req.flash('message', 'User Not found.'));                 
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return complete(null, false, req.flash('message', 'Invalid Password')); 
                        // redirect back to login page
                    }
                    // User and password both match, return user from complete method
                    // which will be treated like success
                    return complete(null, user);
                }
            );  
        })
  );
  
    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
    
}