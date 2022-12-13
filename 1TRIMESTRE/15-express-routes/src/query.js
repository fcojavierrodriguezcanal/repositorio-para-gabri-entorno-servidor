const { query } = require('express');
const express = require('express');
const router = express.Router();


// middleware that is specific to this router
 router.use(function timeLog(req, res, next) {
console.log('Time: ', Date.now());
 next();
 });
 let suma=0;
 // define the home page route
 router.get('/:query', (req, res) => {
      for(let i=0;i<=req.params.query;i++){
            suma=suma+=i;
      }
      res.send(`la suma es ${suma}`);

});
 // define the about route
 module.exports = router;