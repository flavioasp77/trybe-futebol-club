import clubService from './clubService';
import matchService from './matchService';
import {
  clubStats,
  homeDraw,
  homeLoss,
  homeWin,
  classification,
} from '../util/functions';

const getHomeLeaderBoard = async () => {
  const matchs = await matchService.getAll();
  const clubs = await clubService.getAll();

  const leaderBoard = clubStats(clubs as []);

  matchs.forEach((match) => {
    if (!match.inProgress) {
      const score = match.homeTeamGoals - match.awayTeamGoals;
      console.log('Score Service =====', score);
      if (score === 0) return homeDraw(match, leaderBoard);
      if (score < 0) return homeLoss(match, leaderBoard);
      return homeWin(match, leaderBoard);
    }
  });
  const homeClassification = classification(leaderBoard);
  console.log('Service =========>', homeClassification);
  return homeClassification;
};

export default {
  getHomeLeaderBoard,
};
