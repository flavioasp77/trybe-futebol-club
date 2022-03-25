import { Request, Response } from 'express';
import matchService from '../services/matchService';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (!inProgress) {
    const matchs = await matchService.getAll();
    return res.status(200).json(matchs);
  }

  const query = inProgress === 'false' ? 0 : 1;

  const matchs = await matchService.getByQuery(query);
  return res.status(200).json(matchs);
};

const createMatch = async (req: Request, res: Response) => {
  const {
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  } = req.body;

  const match = await matchService.createMatch({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  });
  return res.status(201).json(match);
};

const finishMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  await matchService.finishMatch(+id);
  return res.status(200).json({ messge: 'Match finished!' });
};

const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals: home, awayTeamGoals: away } = req.body;

  await matchService.updateMatch(+id, home, away);

  return res.status(200).json({ message: 'Match updated!' });
};

export default {
  getAll,
  createMatch,
  finishMatch,
  updateMatch,
};
