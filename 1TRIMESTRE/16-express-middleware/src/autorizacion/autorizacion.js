const express = require('express');
const app = express();

app.use(function(req, res, next) {
  const password = req.headers.password;
  if (password === 'patata') {
    res.status(200).send('Bienvenid@, disfruta del contenido.');
  } else {
    res.status(401).send('saje Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición');
  }
});