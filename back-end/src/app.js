const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes/jobsRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes)
app.use(errorHandler);

module.exports = app;