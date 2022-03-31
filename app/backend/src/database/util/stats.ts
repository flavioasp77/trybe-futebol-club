import Clubs from '../interfaces/club';
import ILeaderBoard from '../interfaces/leaderBoard';

const stats = (clubs: Clubs[]) => {
  const leaderBoard: ILeaderBoard [] = [];

  clubs.forEach((club) => {
    leaderBoard.push({
      name: club.clubName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    });
  });

  return leaderBoard;
};

export default stats;
