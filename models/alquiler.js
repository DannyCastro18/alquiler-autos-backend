"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    
    static associate(models) {
      Alquiler.belongsTo(models.Cliente, { foreignKey: "clienteId" });

      Alquiler.belongsTo(models.Auto, { foreignKey: "autoId" });
    }
  }
  Alquiler.init(
    {
      fechaInicio: DataTypes.DATE,
      fechaFin: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Alquiler",
      tableName: "Alquileres",
    },
  );

  return Alquiler;
};
