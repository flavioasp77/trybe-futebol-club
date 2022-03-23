import { Request, Response } from 'express';
import clubService from '../services/clubService';

const getAll = async (req: Request, res: Response) => {
  const clubs = await clubService.getAll();
  return res.status(200).json(clubs);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const club = await clubService.getById(id);

  return res.status(200).json(club);
};

export default {
  getAll,
  getById,
};
