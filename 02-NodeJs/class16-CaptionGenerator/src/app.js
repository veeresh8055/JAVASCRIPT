import express from 'express'
import router  from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';



const app = express()

app.use(cookieParser())
app.use(express.json())
//auth routes 
app.use('/auth' , router)


export default app ; 