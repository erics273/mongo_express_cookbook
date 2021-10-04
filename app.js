var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Bring in Mongoose so we can communicate with MongoDB
const mongoose = require('mongoose')

//Use mongoose to connect to MongoDB. Display success or failure message depending on connection status
mongoose.connect("mongodb://127.0.0.1:27017/cookbookApp", { useNewUrlParser: true })
    .then(() => {
        console.log("we have connected to mongo")
    }).catch(() => {
        console.log("could not connect to mongo")
    })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//import our recipe router from recipe.routes.js
const recipeRouter = require('./routes/recipe.routes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//tell our app to use our recipe routes and prefix them with /api/recipes
app.use('/api/recipes', recipeRouter)

module.exports = app;
