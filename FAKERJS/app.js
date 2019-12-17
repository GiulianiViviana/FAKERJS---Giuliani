var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
var faker = require('faker');
const poet = require('./vettorePoeti');


poeti = new Array();
for(let i=0;i<10;i++){
    oggetto = {
        id : i,
        nome : faker.name.firstName(),
        cognome : faker.name.lastName(),
        email : faker.internet.email(),
        card : faker.helpers.createCard(),
        immagine : faker.image.people(),
        sitoWeb : faker.internet.url(),
        nazionalita : faker.address.country(),
        poesie: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph()
        ]
    }
    poeti.push(oggetto);
}

let data = JSON.stringify(poeti);
//fs.writeFileSync('vettorePoeti.json', data);

//console.log(poet)



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.get('/profilo', function(req, res){
    const prof = poet.find(p => p.id == req.query.id);
    console.log(prof)
    res.render('profilo',{
        title: `Profilo poeta`,prof:prof
    });
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
