import { Router } from 'express';
import clubController from '../controllers/clubController';

const matchsRouter = Router();

matchsRouter.get(
  '/clubs',
  // validateJWT,
  clubController.getAll,
);

export default matchsRouter;
