import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';

const validateJWT = async (req: Request, res: Response) => {
  const token: string | undefined = req.headers.authorization;
  const SECRET = await fs.readFile('jwt.evaluation.key', 'utf-8');

  if (!token) return res.send('Token Inválido');

  const { role } = jwt.verify(token, SECRET) as { role: string };
  return res.status(200).send(role);
};

export default validateJWT;
