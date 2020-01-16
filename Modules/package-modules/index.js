var data;
var _version = "1.0.0";

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