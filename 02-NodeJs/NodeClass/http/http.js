// create a server 

const http = require('http')

http.createServer((req,res)=>{
    res.end('Hello from server ')
})
.listen(3000,(err)=>{
  if(err) throw err;


  console.log('Server Started at PORT 3000')
})