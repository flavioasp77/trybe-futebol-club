import Match from '../models/Match';

const getAll = async () => {
  const matchs = Match.findAll();
  console.log('Math Service =================>', matchs);
  return matchs;
};

export default {
  getAll,
};
