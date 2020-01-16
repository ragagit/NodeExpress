
module.exports = function () {
    
    var data;
    var _version = "1.0.0";

    function version() {
        return _version;
    }

    var functions = {

        set: function set(arg) {
            data = arg;
        },
        get: function get() {
            console.log(version());
            return data;
        }

    };

    return functions;
}

