// Desarrollar un sistema básico de gestión de alquiler de autos que permita registrar clientes, autos disponibles y alquileres realizados. El sistema debe permitir:Registrar clientes con datos como nombre, correo electrónico y número de licencia.Registrar autos con información como marca, modelo, año y estado de disponibilidad.Realizar un alquiler registrando el cliente, el auto alquilado y la fecha de inicio y fin del alquiler.Mostrar un listado de autos disponibles para alquiler y un historial de alquileres.

require('dotenv').config()
const express = require('express')
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
      return res.sendStatus(200);
  }
  
  next();
});


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.use(express.json())

const autosRoutes = require('./routes/autosRoutes')
const alquilerRoutes = require('./routes/alquilerRoutes')
const clienteRoutes = require('./routes/clienteRoutes')

app.use('/api', autosRoutes)
app.use('/api', alquilerRoutes)
app.use('/api', clienteRoutes)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})