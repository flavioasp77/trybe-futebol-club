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

const finishMatch = async (matchId: number) => {
  await Match.update(
    {
      inProgress: 0,
    },
    { where: { id: matchId } },
  );
};

const updateMatch = async (matchId: number, home: number, away: number) => {
  await Match.update(
    {
      homeTeamGoals: home,
      awayTeamGoals: away,
    },
    {
      where: { id: matchId },
    },
  );
};

export default {
  getAll,
  getByQuery,
  createMatch,
  finishMatch,
  updateMatch,
};
