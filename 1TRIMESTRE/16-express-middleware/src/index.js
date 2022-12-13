 const express = require('express');
 const morgan = require('morgan');
 const winston = require('winston');
 var scLogger = require('./logger/scLogger')
 var winstonLogger = require('./logger/winstonLogger')
 const logger = winston.createLogger({
 transports: [
 new winston.transports.Console({
 level: 'debug',
 handleExceptions: true,
 json: false,
 colorize: true
 })
 ],
 exitOnError: false
 });
 index.use(scLogger);

 index.use(function(req, res, next) {
   const password = req.headers.password;
   if (password === 'patata') {
     res.status(200).send('Bienvenid@, disfruta el contenido.');
    next();
   } else {
     res.status(401).send('Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición');
   }
 });
 logger.stream = {
 write(message) {
logger.info(message);
},
 };

 index.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.index.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('Error del servidor');
  });