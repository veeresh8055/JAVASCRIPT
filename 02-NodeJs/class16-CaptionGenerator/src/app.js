import express from 'express'
import authRoutes  from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.routes.js'



const app = express()

app.use(cookieParser())
app.use(express.json())
//auth routes 
app.use('/auth' , authRoutes)
app.use('/api/posts',postRoutes)


export default app ; 