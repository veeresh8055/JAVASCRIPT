const http = require('http')
const server = http.createServer((req,res)=>{
    res.end("Hello from the server love u 3000")
})
server.listen(3000,()=>{
    console.log("My first server is running......")
})