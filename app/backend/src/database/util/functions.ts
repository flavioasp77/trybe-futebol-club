import Club from '../interfaces/club';
import ILeaderBoard from '../interfaces/leaderBoard';

const clubStats = (clubs: Club[]) => {
  const leaderBoard: ILeaderBoard[] = [];

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

const homeDraw = (match: any, leaderBoard: ILeaderBoard[]) => {
  leaderBoard.forEach((club) => {
    const team = club;
    if (match.homeClub.clubName === club.name) {
      team.totalGames += 1;
      team.totalDraws += 1;
      team.totalPoints += 1;
      team.goalsBalance += match.homeTeamGoals - match.awayTeamGoals;
      team.goalsFavor += match.homeTeamGoals;
      team.goalsOwn += match.awayTeamGoals;
      team.efficiency = +(
        (team.totalPoints / (team.totalGames * 3)) * 100
      ).toFixed(2);
    }
  });
};

const homeLoss = (match: any, leaderBoard: ILeaderBoard[]) => {
  leaderBoard.forEach((club) => {
    const team = club;
    if (match.homeClub.clubName === club.name) {
      team.totalGames += 1;
      team.totalLosses += 1;
      team.goalsBalance += match.homeTeamGoals - match.awayTeamGoals;
      team.goalsFavor += match.homeTeamGoals;
      team.goalsOwn += match.awayTeamGoals;
      team.efficiency = +(
        (team.totalPoints / (team.totalGames * 3)) * 100
      ).toFixed(2);
    }
  });
};

const homeWin = (match: any, leaderBoard: ILeaderBoard[]) => {
  leaderBoard.forEach((club) => {
    const team = club;
    if (match.homeClub.clubName === club.name) {
      team.totalGames += 1;
      team.totalVictories += 1;
      team.totalPoints += 3;
      team.goalsBalance += match.homeTeamGoals - match.awayTeamGoals;
      team.goalsFavor += match.homeTeamGoals;
      team.goalsOwn += match.awayTeamGoals;
      team.efficiency = +(
        (team.totalPoints / (team.totalGames * 3)) * 100
      ).toFixed(2);
    }
  });
};

const classification = (leaderBoard: ILeaderBoard[]) =>
  leaderBoard.sort((a, b) => {
    if (a.totalPoints > b.totalPoints) return -1;
    if (a.totalPoints < b.totalPoints) return 1;
    if (a.totalVictories > b.totalVictories) return -1;
    if (a.totalVictories < b.totalVictories) return 1;
    if (a.goalsBalance > b.goalsBalance) return -1;
    if (a.goalsBalance < b.goalsBalance) return 1;
    if (a.goalsFavor > b.goalsFavor) return -1;
    if (a.goalsFavor < b.goalsFavor) return 1;
    if (a.goalsOwn > b.goalsOwn) return -1;
    if (a.goalsOwn > b.goalsOwn) return 1;
    console.log('Functions =======>', leaderBoard);
    return 0;
  });

export {
  clubStats,
  homeDraw,
  homeLoss,
  homeWin,
  classification,
};
