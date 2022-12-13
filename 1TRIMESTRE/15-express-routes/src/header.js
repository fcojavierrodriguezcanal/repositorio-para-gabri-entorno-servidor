const express = require('express');
const router = express.Router();
const tokens =  ["pepe"];

// middleware that is specific to this router
 router.use(function timeLog(req, res, next) {
console.log('Time: ', Date.now());
 next();
 });
 // define the home page route
 router.put('/token', (req, res) => {
    if (tokens.includes(req.get('mitoken'))) {
      res.send(`Tu token es valido`);
      console.log(req.params.token)
  } else {
    res.status(401).send(`{
         "code": 401,
        "error": "Unauthorized",
         "message": "Error: Set a token to login"
         }`);
  }
})
 // define the about route
 module.exports = router;