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
    where: { inProgess: query },
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

export default {
  getAll,
  getByQuery,
};
