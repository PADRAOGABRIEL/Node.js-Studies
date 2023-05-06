const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//Rotas Home
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas contato
route.get('/contato', contatoController.homePage)

module.exports = route;
