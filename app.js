const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');
require('dotenv').config();
const app = express();
app.use(express.json());


app.use('/',homeRoute);


mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT | 3000,() => {
        console.log("Server Listening to port 3000");
    });
})


