'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matchs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Matchs.init({
    id: DataTypes.NUMBER,
    homeTeam: DataTypes.NUMBER,
    homeTeamGoals: DataTypes.NUMBER,
    awayTeam: DataTypes.NUMBER,
    awayTeamGoals: DataTypes.NUMBER,
    inProgress: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Matchs',
  });
  return Matchs;
};