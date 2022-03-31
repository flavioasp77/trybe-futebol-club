import { Request, Response } from 'express';

const getHomeLeaderBoard = async (_req: Request, res: Response) => {
  const homeClassification = await leaderBoardService.getHomeLeaderBoard();
  return res.status(200).json(homeClassification);
};

export default {
  getHomeLeaderBoard,
};
