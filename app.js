// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

import express from 'express';
import router from './routes/index.js';
import  login  from './routes/login.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());


app.use(express.static('public'));
app.use('/public', express.static('public'));


app.use('/', router);  // Ispravi na app.use umesto app.get
app.use("/login",login)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});