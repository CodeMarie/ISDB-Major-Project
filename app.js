const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config();
const connect_key = process.env.MONGOOSE_CONNECT_KEY;
console.log(process.env);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const routes = require('./routes/routes');

const app = express();

mongoose.connect(connect_key);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', routes);

module.exports = app;
