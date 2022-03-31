import clubService from './clubService';
import matchService from './matchService';

const getHomeLeaderBoard = async () => {
  const matchs = await matchService.getAll();
  const clubs = await clubService.getAll();

  const clubStats = stats(clubs);

};

export default {
  getHomeLeaderBoard,
};
