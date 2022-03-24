import { Router } from 'express';
import clubController from '../controllers/clubController';

const matchsRouter = Router();

matchsRouter.get(
  '/clubs',
  clubController.getAll,
);

matchsRouter.get(
  '/clubs/:id',
  clubController.getById,
);

matchsRouter.get('/matchs');

export default matchsRouter;
