import clubService from './clubService';
import matchService from './matchService';
import {
  stats,
  homeDraw,
  homeLoss,
  homeWin,
} from '../util/functions';

const getHomeLeaderBoard = async () => {
  const { matchs }: any = await matchService.getAll();
  const clubs: any = await clubService.getAll();

  const clubStats = stats(clubs);

  matchs.forEach((match: any) => {
    if (!match.inProgress) {
      const score = match.homeTeamGoals - match.awayTeamGoals;
      if (score === 0) return homeDraw(match, clubStats);
      if (score < 0) return homeLoss(match, clubStats);
      return homeWin(match, clubStats);
    }
  });

  const homeClassification = await classification(clubStats);

  return homeClassification;
};

export default {
  getHomeLeaderBoard,
};
