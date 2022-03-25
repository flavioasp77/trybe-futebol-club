import { NextFunction, Request, Response } from 'express';
import Club from '../models/Club';

const validateDubbleTeam = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  next();
};

const validateTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  const home = await Club.findByPk(homeTeam);
  const away = await Club.findByPk(awayTeam);

  if (!home || !away) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default {
  validateDubbleTeam,
  validateTeam,
};
