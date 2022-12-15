const express = require('express');
const router = express.Router();


// middleware that is specific to this router
 router.use(function timeLog(req, res, next) {
console.log('Time: ', Date.now());
 next();
 });
 // define the home page route
 router.get('/:param', (req, res) => {

      res.send(`Hello ${req.params.param}!`);

});
 // define the about route
 module.exports = router;