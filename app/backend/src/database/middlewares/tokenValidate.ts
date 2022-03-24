import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';

const tokenValidate = async (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;
  const SECRET = await fs.readFile('jwt.evaluation.key', 'utf-8');

  if (!token || token === '') return res.send('Token Inválido');

  jwt.verify(token, SECRET) as { role: string };
  next();
};

export default tokenValidate;
