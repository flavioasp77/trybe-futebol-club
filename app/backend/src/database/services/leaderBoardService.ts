import clubService from './clubService';
import matchService from './matchService';
import {
  stats,
  homeDraw,
  homeLoss,
  homeWin,
  classification,
} from '../util/functions';

const getHomeLeaderBoard = async () => {
  const { matchs }: any = await matchService.getAll();
  const clubs: any = await clubService.getAll();

  const leaderBoard = stats(clubs);

  matchs.forEach((match: any) => {
    if (!match.inProgress) {
      const score = match.homeTeamGoals - match.awayTeamGoals;
      if (score === 0) return homeDraw(match, leaderBoard);
      if (score < 0) return homeLoss(match, leaderBoard);
      return homeWin(match, leaderBoard);
    }
  });

  const homeClassification = await classification(leaderBoard);

  return homeClassification;
};

export default {
  getHomeLeaderBoard,
};
