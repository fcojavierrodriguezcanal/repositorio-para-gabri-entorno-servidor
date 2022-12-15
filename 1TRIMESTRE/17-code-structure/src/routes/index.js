 const { Router } = require('express');

 const users = require('./users');
 const basicController = require('../controllers/basic');

 const routes = Router();
 const basicRoutes = Router();

 basicRoutes.get('/ping', basicController.pong);
 basicRoutes.get('/fibonacci', basicController.getFibinacciNumber);
 routes.use('/users', users);

 module.exports = {routes, basicRoutes};