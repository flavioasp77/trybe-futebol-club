import { Model, DataTypes } from 'sequelize';
import Club from './Club';
import db from '.';

class Match extends Model {
  public id?: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;

  public inProgress: number;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'matchs',
  timestamps: false,
});

Match.belongsTo(Club, { foreignKey: 'homeTeam', as: 'homeClub' });

Match.belongsTo(Club, { foreignKey: 'awayTeam', as: 'awayClub' });

export default Match;
