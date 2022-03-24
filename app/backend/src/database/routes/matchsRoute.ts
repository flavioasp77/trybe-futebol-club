import { Router } from 'express';
import clubController from '../controllers/clubController';
import matchController from '../controllers/matchController';
import tokenValidate from '../middlewares/tokenValidate';

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
  tokenValidate,
  matchController.createMatch,
);

matchsRouter.patch(
  'matchs/:id/finish',
);

export default matchsRouter;
