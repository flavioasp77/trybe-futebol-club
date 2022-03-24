import Club from '../models/Club';
import Match from '../models/Match';

const getAll = async () => {
  const matchs = Match.findAll({
    include: [
      {
        model: Club,
        as: 'homeClube',
        attributes: ['clubName'],
      },
      {
        model: Club,
        as: 'awayClube',
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
