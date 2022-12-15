const express = require('express');
const birds = require('./birds');
const header = require('./header');
const params = require('./params');
const query = require('./query');
const body = require('./body');

const server = express();

server.use('/birds', birds);
server.use('/header', header);
server.use('/params', params);
server.use('/query', query);
server.use('/body', body);

server.listen(3000, () => {
console.log(`Example app listening`)
10 });