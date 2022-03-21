import Club from '../models/Club';

const getAll = async () => {
  const clubs = await Club.findAll();
  return clubs;
};

export default {
  getAll,
};
