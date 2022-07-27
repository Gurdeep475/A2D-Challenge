const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const apiV1Routes = require('./routes/api_v1');

require('dotenv').config();
const app = express();
app.use(express.json());


app.use('/',homeRoute);     // Home Route
app.use('/auth',authRoute); // Authentication Route
app.use('/api/v1',apiV1Routes);  // api_v1 routes



mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT | 3000,() => {
        console.log("Server Listening to port 3000");
    });
})