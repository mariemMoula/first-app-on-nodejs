// we re going to raise an event in the logger module and listen 
// to that event on the event module

var url ='http://mylogger.io/log';

const EventEmitter = require('events') ;
class Logger extends EventEmitter {

    log(message){

        // Send an HTTP request
        console.log("in the looger.js " ,message);
        // Raising an event 
        this.emit('messageLogged',{id: 1 , url:'http://'});  
    }
}

module.exports = Logger ; 
