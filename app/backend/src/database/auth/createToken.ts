import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';
import { IUser } from '../interfaces/userInterfaces';
import loginService from '../services/loginService';

const createToken = async (email: string, _password: string): Promise<string> => {
  const user : IUser | null = await loginService.userLogin(email, _password);

  const SECRET = await fs.readFile('jwt.evaluation.key', 'utf-8');

  const token: string = jwt.sign(
    {
      id: user?.id,
      user: user?.username,
      email,
    },
    SECRET,
    {
      expiresIn: '15d',
      algorithm: 'HS256',
    },
  );

  return token as string;
};

export default createToken;
