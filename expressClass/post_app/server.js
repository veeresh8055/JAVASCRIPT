const express = require('express')
const { connectDb } = require('./config/db')
const postRouter = require('./routes/postRoutes.js')
const userRouter = require('./routes/userRoutes.js')


require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/public" ,  express.static('public'))

app.use('/postapi' , postRouter)
app.use('/auth' ,userRouter  )

app.use(express.json())
connectDb()


app.listen(process.env.PORT , (err) => {
    if (err) throw err;
    console.log('server started at port :  ' + process.env.PORT)
})

