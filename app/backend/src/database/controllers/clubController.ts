import { Request, Response } from 'express';
import clubService from '../services/clubService';

const getAll = async (req: Request, res: Response) => {
  const clubs = await clubService.getAll();

  return res.status(200).json(clubs);
};

export default {
  getAll,
};
