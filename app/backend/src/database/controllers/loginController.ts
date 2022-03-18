import { Request, Response } from 'express';
// import createToken from '../auth/createToken';
import loginService from '../services/loginService';

const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginService.userLogin(email, password);

  // const token = createToken(email, password);

  return res.status(200).json(user);
};

export default {
  userLogin,
};
