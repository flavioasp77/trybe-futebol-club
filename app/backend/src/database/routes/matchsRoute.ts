import { Router } from 'express';
// import validateJWT from '../auth/validateToken';
import clubService from '../services/clubService';

const matchsRouter = Router();

matchsRouter.get(
  '/clubs',
  // validateJWT,
  clubService.getAll,
);

export default matchsRouter;
