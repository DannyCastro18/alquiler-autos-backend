const clienteController = require('../controllers/clientesController')
const express = require('express')
const route = express.Router()

route.post('/clientes', clienteController.registrarCliente)
route.get('/clientes', clienteController.mostrarClientes)
route.post('/login', clienteController.login)

module.exports = route