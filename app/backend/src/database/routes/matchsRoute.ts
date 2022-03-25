// routes
import { Router } from 'express';
import clubController from '../controllers/clubController';
import matchController from '../controllers/matchController';
import matchValidate from '../middlewares/matchValidate';
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
  matchValidate.validateDubbleTeam,
  matchValidate.validateTeam,
  matchController.createMatch,
);

matchsRouter.patch(
  '/matchs/:id/finish',
  matchController.finishMatch,
);

matchsRouter.patch(
  '/matchs/:id',
  matchController.updateMatch,
);

export default matchsRouter;
