/*
function greet(){
  console.log("Welcome to Master Node.js");
}

module.exports = greet;
*/
var data;
var _version = "1.0.0";
/*
exports.set=function(arg){
 data=arg;
}

exports.get=function(){
return data;
}
*/

function set(arg){
 data=arg;
}

function get(){
return data;
}

function version(){
    return _version;
}

exports.set = set;
exports.get = get;