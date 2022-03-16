'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clubName: {
        type: Sequelize.STRING,
        allowNull: false
      },     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clubs');
  }
};