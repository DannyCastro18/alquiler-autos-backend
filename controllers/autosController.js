const { Auto } = require("../models");

const crearAuto = async (req, res) => {
  console.log(req.body);
  try {
    const { marca, modelo, imageUrl, valorAlquiler, year, estado } = req.body;
    const nuevoAuto = await Auto.create({
      marca,
      modelo,
      year,
      estado,
      imageUrl,
      valorAlquiler,
    });

    res.json({ auto: nuevoAuto });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const mostrarAutosDisponibles = async (req, res) => {
  try {
    const autosDisponibles = await Auto.findAll({
      where: {
        estado: 1,
      },
    });

    res.json(autosDisponibles);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const mostrarAutos = async (req, res) => {
  try {
    const autos = await Auto.findAll();
    res.json(autos);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const cambiarEstado = async (idAuto, estado) => {
  try {
    const actualizado = await Auto.update(
      { estado: estado },
      { where: { id: idAuto } },
    );

    return actualizado;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { crearAuto, mostrarAutosDisponibles, cambiarEstado, mostrarAutos };
