const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const userRouter = require('./routes/customers');
const sportsRouter = require('./routes/sports');
const storeRouter = require('./routes/store')

const app = express();

// now using cors
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customers', userRouter);
app.use('/sports', sportsRouter);
app.use('/store', storeRouter);

module.exports = app;


//customers instead of users