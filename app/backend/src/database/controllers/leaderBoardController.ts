import { Request, Response } from 'express';
import leaderBoardService from '../services/leaderBoardService';

const getHomeLeaderBoard = async (_req: Request, res: Response) => {
  const homeClassification = await leaderBoardService.getHomeLeaderBoard();
  console.log('controller ==============>', homeClassification);
  return res.status(200).json(homeClassification);
};

export default {
  getHomeLeaderBoard,
};
