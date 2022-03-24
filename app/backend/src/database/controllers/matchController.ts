import { Request, Response } from 'express';

const getAll = async (_req: Request, res: Response) => {
  const matchs = await matchService.getAll();

  res.status(200).json(matchs);
};

export default {
  getAll,
};
