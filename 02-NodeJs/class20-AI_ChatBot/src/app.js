import express from 'express';
import cookieParser from 'cookie-parser'

//routes 
import authRouter from './routes/auth.routes.js'
import chatRouter from './routes/chat.routes.js'


// middlewares
const app = express()
app.use(cookieParser())
app.use(express.json())

//using routes 
app.use('/api/auth' , authRouter)
app.use('/api/chat',chatRouter)


export default app ;
