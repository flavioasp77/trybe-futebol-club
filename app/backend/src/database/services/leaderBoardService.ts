import clubService from './clubService';
import matchService from './matchService';
import {
  clubStats,
  homeDraw,
  awayDraw,
  homeLoss,
  awayLoss,
  homeWin,
  awayWin,
  classification,
} from '../util/functions';

const getHomeLeaderBoard = async () => {
  const matchs = await matchService.getAll();
  const clubs = await clubService.getAll();

  const leaderBoard = clubStats(clubs as []);

  matchs.forEach((match) => {
    if (!match.inProgress) {
      const score = match.homeTeamGoals - match.awayTeamGoals;
      if (score === 0) return homeDraw(match, leaderBoard);
      if (score < 0) return homeLoss(match, leaderBoard);
      return homeWin(match, leaderBoard);
    }
  });
  const homeClassification = classification(leaderBoard);
  return homeClassification;
};

const getAwayLeaderBoard = async () => {
  const matchs = await matchService.getAll();
  const clubs = await clubService.getAll();

  const leaderBoard = clubStats(clubs as []);

  matchs.forEach((match) => {
    if (!match.inProgress) {
      const score = match.homeTeamGoals - match.awayTeamGoals;
      if (score === 0) return awayDraw(match, leaderBoard);
      if (score < 0) return awayLoss(match, leaderBoard);
      return awayWin(match, leaderBoard);
    }
  });
  const homeClassification = classification(leaderBoard);
  return homeClassification;
};

export default {
  getHomeLeaderBoard,
  getAwayLeaderBoard,
};
