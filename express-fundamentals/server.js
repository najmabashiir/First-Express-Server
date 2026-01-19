// const express= require('express');
// const server=express();
// const PORT=3000;

// // basic route
// server.get('/',(req,res)=>{
//     res.send("hello najma")
// });
// // start server
// server.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// })

// http module code
const http= require('http');
const PORT=3001;

const server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('hello najma with express fundamentals');
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});