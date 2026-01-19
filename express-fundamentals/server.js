const express= require('express');
const server=express();
const PORT=3000;

// basic route
server.get('/',(req,res)=>{
    res.send("hello najma")
});
// start server
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})