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
      homeTeam: {
        type: Sequelize.NUMBER,
        allowNull: false,
        referemces: {
          model: 'Club',
          key: 'id'
        }
      },
      homeTeamGoals: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
      awayTeam: {
        type: Sequelize.NUMBER,
        allowNull: false,
        referemces: {
          model: 'Club',
          key: 'id'
        }
      },
      awayTeamGoals: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
      inProgress: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matchs');
  }
};