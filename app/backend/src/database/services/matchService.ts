import IMatch from '../interfaces/matchInterfaces';
import Club from '../models/Club';
import Match from '../models/Match';

const getAll = async () => {
  const matchs = await Match.findAll({
    include: [
      {
        model: Club,
        as: 'homeClub',
        attributes: ['clubName'],
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: ['clubName'],
      },
    ],
  });
  return matchs;
};

const getByQuery = async (query: number) => {
  const matchs = await Match.findAll({
    where: { inProgress: query },
    include: [
      {
        model: Club,
        as: 'homeClub',
        attributes: ['clubName'],
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: ['clubName'],
      },
    ],
  });
  return matchs;
};

const createMatch = async ({
  homeTeam,
  awayTeam,
  homeTeamGoals,
  awayTeamGoals,
  inProgress,
}: IMatch) => {
  const match = await Match.create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  });

  return match;
};

export default {
  getAll,
  getByQuery,
  createMatch,
};
