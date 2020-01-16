var util=require('util');
var EventEmitter = require('events').EventEmitter;

function Logger(){
    this.message = "logger";
}

util.inherits(Logger,EventEmitter);

Logger.prototype.log = function(message){
   if(message!=undefined)
    this.message = message;
  
   this.emit('info',this.message);
}

var logger = new Logger();
logger.on('info',function(msg){
   console.log("Logger Event Raised : "+msg); 
});

logger.log("Log Message");