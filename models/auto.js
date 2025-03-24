"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Auto extends Model {

    static associate(models) {
      Auto.hasMany(models.Alquiler, { foreignKey: "autoId" });
    }
  }
  Auto.init(
    {
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      year: DataTypes.STRING,
      estado: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      valorAlquiler: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Auto",
    },
  );

  return Auto;
};
