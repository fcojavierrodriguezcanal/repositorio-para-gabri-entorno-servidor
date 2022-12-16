const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];
let id = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/users', (req, res) => {
  return res.status(200).send(users);
});r
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('Usuario no encontrado');
  }

  return res.status(200).send(user);
});
app.post('/users', (req, res) => {
  const user = {
    id: ++id,
    name: req.body.name,

  };

  users.push(user);

  return res.status(201).send(user);
});

app.put('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('Usuario no encontrado');
  }

  user.name = req.body.name;

  return res.status(200).send(user);
});

app.patch('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('Usuario no encontrado');
  }

  if (req.body.name) {
    user.name = req.body.name;
  }


  return res.status(200).send(user);
});
app.delete('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('Usuario no encontrado');
  }

  const index = users.indexOf(user);
  users.splice(index, 1);

  return res.status(200).send(user);
});

module.exports = app;
