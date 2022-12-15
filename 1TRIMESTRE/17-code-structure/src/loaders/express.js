 const express = require('express');
 const cors = require('cors');

 const {routes, basicRoutes} = require('../routes');

 module.exports = (expressApp, config) => {
 expressApp.use(cors());
 expressApp.use(express.json({ limit: '50mb' }));
 expressApp.use(express.urlencoded({ limit: '50mb', extended: true }))
;
 expressApp.use(basicRoutes);
 expressApp.use('/v1', routes);
 expressApp.use((req, res) => res.status(404).send({ message: 'Not Found' }));

 };