'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      club_name: {
        type: Sequelize.STRING,
        allowNull: false,               
      },     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cslubs');
  }
};