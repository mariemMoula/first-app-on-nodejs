

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log("ACTION HANDELED", arg);
});// event handling (nameofThevent , callbackfunction or the actual listner) 

logger.log('message sent');