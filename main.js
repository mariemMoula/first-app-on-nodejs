const http = require('http') ;
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('HELLO WORLD') ;
        res.end();
    }
    if(req.url === '/api/mimi'){
        res.write('HELLO MIMI') ;
        res.end();
    }
});


server.listen(80); 


// const server = http.createServer()
// server.on('connection',(socket)=>{
//     console.log('New connection...') ;
// });

console.log('LISTING ON PORT 3000...');