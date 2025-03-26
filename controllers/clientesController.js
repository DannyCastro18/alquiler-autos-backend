const { Cliente } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { correo, password } = req.body;
  try {
    const cliente = await Cliente.findOne({ where: { correo } });
    if (!cliente) {
      return res.status(404).json({ mjs: "Cliente no encontrado" });
    }
    const passwordValido = await bcrypt.compare(password, cliente.password);

    if (!passwordValido) {
      return res.status(401).json({ mjs: "Contraseña incorrecta" });
    }

    res.status(200).json({ msj: "Iniciaste sesion con exito", cliente });
  } catch (error) {
    console.error("Error al iniciar sesion:", error);
    res
      .status(500)
      .json({ msj: "Error al iniciar sesion", error: error.message });
  }
};

const mostrarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const registrarCliente = async (req, res) => {
  try {
    const { nombre, correo, numeroLicencia, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoCliente = await Cliente.create({
      nombre,
      correo,
      numeroLicencia,
      password: hashedPassword,
    });

    res.status(201).json({ cliente: nuevoCliente });
  } catch (error) {
    console.log("Error al registrar el cliente: ", error);
    res.status(500).json({ error: "Error al registrar el cliente" });
  }
};
module.exports = { mostrarClientes, registrarCliente, login };
