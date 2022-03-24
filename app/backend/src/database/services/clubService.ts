import Club from '../models/Club';

const getAll = async () => {
  const clubs = await Club.findAll();
  return clubs;
};

const getById = async (id: number) => {
  const club = await Club.findByPk(id);
  return club;
};

export default {
  getAll,
  getById,
};
