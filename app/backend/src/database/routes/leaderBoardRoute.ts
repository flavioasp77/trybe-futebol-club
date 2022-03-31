import { Router } from 'express';
import leaderBoardController from '../controllers/leaderBoardController';

const leaderBoardRouter = Router();

leaderBoardRouter.get(
  '/leaderboard/home',
  leaderBoardController.getHomeLeaderBoard,
);

export default leaderBoardRouter;
