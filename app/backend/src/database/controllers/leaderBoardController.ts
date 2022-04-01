import { Request, Response } from 'express';
import leaderBoardService from '../services/leaderBoardService';

const getHomeLeaderBoard = async (_req: Request, res: Response) => {
  const homeClassification = await leaderBoardService.getHomeLeaderBoard();
  return res.status(200).json(homeClassification);
};

const getAwayLeaderBoard = async (_req: Request, res: Response) => {
  const awayClassification = await leaderBoardService.getAwayLeaderBoard();
  return res.status(200).json(awayClassification);
};

const getGeralLeaderBoard = async (_req: Request, res: Response) => {
  const geralClassification = await leaderBoardService.getGeralLeaderBoard();
  return res.status(200).json(geralClassification);
};

export default {
  getHomeLeaderBoard,
  getAwayLeaderBoard,
  getGeralLeaderBoard,
};
