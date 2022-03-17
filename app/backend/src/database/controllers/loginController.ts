import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = loginService.login(email, password);

  res.status(200).json.({ user, token });
};

export default {
  login,
};
