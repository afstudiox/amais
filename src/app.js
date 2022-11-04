const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());

app.use('/', userRoute)

module.exports = app;