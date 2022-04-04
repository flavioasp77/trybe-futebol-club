import { Router } from 'express';
import leaderBoardController from '../controllers/leaderBoardController';

const leaderBoardRouter = Router();

leaderBoardRouter.get(
  '/leaderboard/home',
  leaderBoardController.getHomeLeaderBoard,
);
leaderBoardRouter.get(
  '/leaderboard/away',
  leaderBoardController.getAwayLeaderBoard,
);

leaderBoardRouter.get(
  '/leaderboard',
  leaderBoardController.getGeralLeaderBoard,
);

export default leaderBoardRouter;
