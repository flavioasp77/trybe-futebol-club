import { Router } from 'express';
import validateJWT from '../auth/validateToken';
import loginController from '../controllers/loginController';
import loginValidate from '../middlewares/loginValidate';

const loginRouter = Router();

loginRouter.post(
  '/login',
  loginValidate.validateEmail,
  loginValidate.validatePassword,
  loginController.userLogin,
);

loginRouter.get(
  '/login/validate',
  validateJWT,
);

export default loginRouter;
