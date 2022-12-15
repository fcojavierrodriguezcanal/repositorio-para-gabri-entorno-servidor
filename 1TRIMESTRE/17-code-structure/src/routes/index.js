 const { Router } = require('express');

 const users = require('./users');
 const pingController = require('../controllers/ping');

 const router = Router();

 router.get('/ping', pingController.pong);
 router.use('/users', users);

 module.exports = router;