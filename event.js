const EventEmitter = require('events') ;
const emitter = new EventEmitter();  // event regestration 



emitter.on('messageLogged', (arg)=>{
    console.log("ACTION HANDELED " , arg) ;
});// event handling (nameofThevent , callbackfunction or the actual listner) 


emitter.emit('messageLogged',{id: 1 , url:'http://'});  // emitting an event 
