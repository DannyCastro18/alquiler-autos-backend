const autoController = require("../controllers/autosController");
const express = require("express");
const route = express.Router();

route.post("/autos", autoController.crearAuto);
route.get("/autos", autoController.mostrarAutos);
route.get("/autos/disponibles", autoController.mostrarAutosDisponibles);
module.exports = route;
