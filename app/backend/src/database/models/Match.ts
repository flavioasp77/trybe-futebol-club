import { Model, DataTypes } from 'sequelize';
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
  },
  homeTeam: {
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

// Club.belongsTo(Match, { foreignKey: 'homeTeam', as: 'homeTeam' });

// Club.belongsTo(Match, { foreignKey: 'awayTeam', as: 'awayTeam' })

export default Match;
