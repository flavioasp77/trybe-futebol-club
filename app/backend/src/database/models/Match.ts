import { Model, DataTypes } from 'sequelize';
import db from '.';
import Club from './Club';

class Match extends Model {
  public id?: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;
  
  public inProgress: number;
}

Match.init({
  id: DataTypes.INTEGER,
  homeTeam: DataTypes.INTEGER,
  homeTeamGoals: DataTypes.INTEGER,
  awayTeam: DataTypes.INTEGER,
  awayTeamGoals: DataTypes.INTEGER,
  inProgress: DataTypes.INTEGER,
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Club.belongsTo(Match, { foreignKey: 'homeTeam', as: 'homeTeam' });

Club.belongsTo(Match, { foreignKey: 'awayTeam', as: 'awayTeam' })

export default Match;