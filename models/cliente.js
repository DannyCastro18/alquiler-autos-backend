'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Alquiler, {
        foreignKey: "clienteId",
        as: "alquileres",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
    }
  }

  Cliente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nombre no puede estar vacío" },
        len: { args: [2, 50], msg: "El nombre debe tener entre 2 y 50 caracteres" }
      }
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "El correo debe ser único" },
      validate: {
        isEmail: { msg: "El correo debe tener un formato válido" }
      }
    },
    numeroLicencia: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El número de licencia no puede estar vacío" },
        esLicenciaValida(value) {
          if (!/^[A-Z0-9]+$/.test(value)) {
            throw new Error("El número de licencia debe contener solo letras mayúsculas y números");
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "La contraseña no puede ser un campo vacío" },
        len: { args: [8, 100], msg: "La contraseña debe tener al menos 8 caracteres" }
      }
    }
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clientes',
    timestamps: true,
    indexes: [
      { unique: true, fields: ['correo'] }
    ]
  });

  return Cliente;
};
