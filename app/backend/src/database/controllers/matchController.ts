import { Request, Response } from 'express';
import matchService from '../services/matchService';

const getAll = async (_req: Request, res: Response) => {
  const matchs = await matchService.getAll();
  console.log('Math Controller ==============>', matchs);

  res.status(200).json(matchs);
};

export default {
  getAll,
};
