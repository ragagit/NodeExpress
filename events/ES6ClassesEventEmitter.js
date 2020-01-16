"use strict";
var EventEmitter = require('events').EventEmitter;

class Logger extends EventEmitter {
    constructor(){
        super();
        this.message = "logger";
    }
    
    log(message){
        if(message!=undefined)
            this.message = message;
  
        this.emit('info',this.message);
    }
}

var logger = new Logger();
logger.on('info',function(msg){
   console.log("Logger Event Raised : "+msg); 
});


logger.log("Log Message");