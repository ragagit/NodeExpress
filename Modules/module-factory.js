var Module = function () {

    var data;
    var _version = "1.0.0";

    function version() {
        return _version;
    }

    this.set = function set(arg) {
        data = arg;
    }

    this.get = function get() {
        console.log(version());
        return data;
    }

};

//module.exports = function () {
//    var obj = new Module();
//    return obj;
//}

module.exports = Module;
