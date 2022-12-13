var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');


const Logger = (req, res, next) => {
  const statusCode = res.statusCode;
  if (statusCode >= 200 && statusCode < 300) {
    console.info(`${statusCode} ${req.method} ${req.path}`);
  } else if (statusCode >= 400 && statusCode < 500) {
    console.warn(`${statusCode} ${req.method} ${req.path}`);
  } else if (statusCode >= 500) {
    console.error(`${statusCode} ${req.method} ${req.path}`);
  }
  next();
};
const winston = require('winston');

const loggerwinston = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            formato: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
});

loggerwinston.info('123')

var indexRouter = require('./rutas/index');
var usersRouter = require('./rutas/users');

var app = express();

app.use(Logger);

app.use(function(req, res, next) {
  const password = req.headers.password;
  if (password === 'patata') {
    res.status(200).send('Bienvenid@, disfruta del contenido');
   next();
  } else {
    res.status(401).send('Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición');
  }
});


app.use(logger(function (tokens, req, res) {
   console.log('API Access:', tokens.method(req, res), tokens.url(req, res));
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.send('Server Error');
});

module.exports = app;
