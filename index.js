const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const passport = require('passport');
const {loginCheck} = require('./auth/passport');
loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('database connected'))
    .catch(err => console.log(err));


  
app.use("/static", express.static("public"));

app.set('view engine', 'ejs');

//BodyParsing
app.use(express.urlencoded({ extended: false }));

//Facilitates session
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));


app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', require('./routes/login'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log("Server has started for port:" + PORT))
