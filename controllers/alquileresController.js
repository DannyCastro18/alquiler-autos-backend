const { Alquiler } = require("../models");
const AutoController = require("../controllers/autosController");

const crearAlquiler = async (req, res) => {
  try {
    const { fechaInicio, fechaFin, clienteId, autoId } = req.body;

    const nuevoAlquiler = await Alquiler.create({
      fechaInicio,
      fechaFin,
      clienteId,
      autoId,
    });

    await AutoController.cambiarEstado(autoId, 0);

    res.json(nuevoAlquiler);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const mostrarAlquileres = async (req, res) => {
  try {
    const historialAlquileres = await Alquiler.findAll();

    res.json(historialAlquileres);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

module.exports = { crearAlquiler, mostrarAlquileres };
