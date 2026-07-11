require('dotenv').config();

const express = require('express');
const { connectDb } = require('./config/db');
const postRouter = require('./routes/postRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.use('/postapi', postRouter);
app.use('/auth', userRouter);

const startServer = async () => {
    await connectDb();

    app.listen(port, (err) => {
        if (err) throw err;
        console.log('server started at port : ' + port);
    });
};

startServer();
