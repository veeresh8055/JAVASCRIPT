import app from './src/app.js'
import dotenv from 'dotenv/config'
import connectToDB from './src/db/db.js';
import initSocketServer from './src/sockets/server.socket.js';
import http from 'http'

const httpServer = http.createServer(app);



connectToDB()
initSocketServer(httpServer);



httpServer.listen(3000,()=>{
    console.log("Server started at port 3000")
})