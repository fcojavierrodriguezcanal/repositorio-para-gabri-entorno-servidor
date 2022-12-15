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
      if(req.params.query==dog){
            res.send(` ${{"grow":"guau guau"}}`);
      }
      else if(req.params.query==cat){
            res.send(` ${{"grow":"miau"}}`);
      }
      else if(req.params.query==bird){
            res.send(` ${{"grow":"pip pop"}}`);
      }
      else{
            res.status(404).send(`{
                  "code": 404,
                 "error": "Not Found",
                  "message": "Error: Path not found
                  }`);
      }

});
 // define the about route
 module.exports = router;