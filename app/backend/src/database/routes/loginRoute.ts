import { Router } from 'express';
import loginController from '../controllers/loginController';

const loginRouter = Router();

loginRouter.post('/login', loginController.userLogin);

export default loginRouter;
