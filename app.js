var express = require('express');

var path = require('path');
//var http = require('http');
var users = require('./routes/users');

var app = express();
var routes =  require('./routes');

var db = require('./model/db')

var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = express.Router();  
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

//test

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());
// app.use(require('stylus').middleware(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.locals.expose = {};
  // you could alias this as req or res.expose
  // to make it shorter and less annoying
  if(!req.param('startRange')){
    res.locals.expose.startRange = '1350-01-01';
  } else {
    res.locals.expose.startRange = req.param('startRange');
  }

  console.log('startRange = ' + res.locals.expose.startRange);

  if(!req.param('endRange')){
    res.locals.expose.endRange = '1450-01-01';
  } else {
    res.locals.expose.endRange = req.param('endRange');
  }
  console.log('endRange = ' + res.locals.expose.endRange);
  next();
});



app.use('/line', routes);
app.use('/users', users);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
