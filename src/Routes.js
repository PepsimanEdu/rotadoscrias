const express = require('express')
const controlers= require('./controlers/recursos');

const routes = express.Router();

routes.get('/',controlers.raiz);

module.exports = routes;
