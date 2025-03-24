module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clientes', 'nombre', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Clientes', 'correo', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true // Asegurar que el correo sea único
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clientes', 'nombre', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Clientes', 'correo', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
    });
  }
};
