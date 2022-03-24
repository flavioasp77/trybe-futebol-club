import { Router } from 'express';
import clubController from '../controllers/clubController';
import matchController from '../controllers/matchController';

const matchsRouter = Router();

matchsRouter.get(
  '/clubs',
  clubController.getAll,
);

matchsRouter.get(
  '/clubs/:id',
  clubController.getById,
);

matchsRouter.get(
  '/matchs',
  matchController.getAll,
);
matchsRouter.post(
  '/matchs',
  matchController.createMatch,
);

export default matchsRouter;
