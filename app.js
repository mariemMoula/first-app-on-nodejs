const logger = require('./logger'); 
logger.log("HI");
console.log("================================");
console.log(__filename);
console.log(__dirname);
const os = require('os');
var totalMemo = os.totalmem(); 
var freeMemo = os.freemem();
console.log("================================");
console.log(totalMemo);
console.log(freeMemo) ;
const fs = require('fs'); 
const files = fs.readdirSync('./'); 
console.log("================================");
console.log(files);
console.log("================================");
fs.readdir('./', function(err,files){
    
    if(err) console.log('ERROR',err) ; 
    else console.log('RESULT',files) ;
});
console.log("other ..");