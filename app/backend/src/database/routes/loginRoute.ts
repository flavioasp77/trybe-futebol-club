import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginValidate from '../middlewares/loginValidate';

const loginRouter = Router();

loginRouter.post(
  '/login',
  loginValidate.validateEmail,
  loginController.userLogin,
);

export default loginRouter;
