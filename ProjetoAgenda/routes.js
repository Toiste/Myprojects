const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homecontroller')
const loginController = require('./src/controllers/logincontroller')

// Rotas da Home
route.get('/', homeController.index)

//Rotas de Login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)

module.exports = route;