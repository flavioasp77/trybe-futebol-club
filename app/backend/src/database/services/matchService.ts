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
  console.log('Math Service =================>', matchs);
  return matchs;
};

export default {
  getAll,
};
