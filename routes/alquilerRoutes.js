const express = require('express')
const route = express.Router()
const alquilerController = require('../controllers/alquileresController')

route.post('/alquiler', alquilerController.crearAlquiler)
route.get('/alquiler', alquilerController.mostrarAlquileres)

module.exports = route
