import { Request, Response } from 'express';
// import createToken from '../auth/createToken';
import matchService from '../services/loginService';

const getAll = async (req: Request, res: Response) => {
  const matches = await matchService.getAll();

  return res.status(200).json(matches);
};

export default {
  getAll,
};
