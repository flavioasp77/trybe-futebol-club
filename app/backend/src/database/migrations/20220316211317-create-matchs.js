'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matchs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      homeTeam: {
        type: Sequelize.NUMBER
      },
      homeTeamGoals: {
        type: Sequelize.NUMBER
      },
      awayTeam: {
        type: Sequelize.NUMBER
      },
      awayTeamGoals: {
        type: Sequelize.NUMBER
      },
      inProgress: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matchs');
  }
};