module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Clientes', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Clientes', 'password');
  }
};
